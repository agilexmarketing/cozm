import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'

export const runtime = 'nodejs'

const listSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  per_page: z.coerce.number().int().min(1).max(50).default(12),
  sort: z.enum(['price_asc', 'price_desc']).optional(),
  location: z.string().trim().optional(),
  price_min: z.coerce.number().int().optional(),
  price_max: z.coerce.number().int().optional(),
  type: z.enum(['SALE', 'RENT']).optional(),
})

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const query = listSchema.parse(Object.fromEntries(url.searchParams))
  
  const where: any = {}
  
  if (query.location) {
    where.OR = [
      { city: { contains: query.location, mode: 'insensitive' } },
      { region: { contains: query.location, mode: 'insensitive' } }
    ]
  }
  
  if (query.price_min || query.price_max) {
    where.price = {
      ...(query.price_min ? { gte: query.price_min } : {}),
      ...(query.price_max ? { lte: query.price_max } : {}),
    }
  }
  
  if (query.type) {
    where.type = query.type
  }
  
  const orderBy = query.sort === 'price_desc' 
    ? { price: 'desc' } 
    : query.sort === 'price_asc' 
    ? { price: 'asc' } 
    : { listedAt: 'desc' }
  
  const skip = (query.page - 1) * query.per_page
  
  const [total, data] = await Promise.all([
    prisma.property.count({ where }),
    prisma.property.findMany({
      where,
      orderBy,
      skip,
      take: query.per_page,
      include: {
        images: {
          orderBy: { order: 'asc' }
        }
      }
    }),
  ])
  
  return NextResponse.json({
    data,
    page: query.page,
    per_page: query.per_page,
    total,
    total_pages: Math.ceil(total / query.per_page)
  })
}

const createSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  type: z.enum(['SALE', 'RENT']),
  price: z.number().int().optional(),
  currency: z.string().default('EUR'),
  city: z.string().optional(),
  region: z.string().optional(),
  address: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
  bedrooms: z.number().int().optional(),
  bathrooms: z.number().int().optional(),
  areaSqm: z.number().int().optional(),
  images: z.array(z.string()).optional(),
  externalId: z.string().optional(),
})

const slugify = (s: string) => 
  s.toLowerCase()
   .normalize('NFD')
   .replace(/[\u0300-\u036f]/g, '')
   .replace(/[^a-z0-9]+/g, '-')
   .replace(/(^-|-$)/g, '')

export async function POST(req: NextRequest) {
  const body = await req.json()
  const data = createSchema.parse(body)
  
  const slugBase = slugify(`${data.title}-${data.city ?? ''}`)
  let slug = slugBase
  let i = 1
  
  while (await prisma.property.findUnique({ where: { slug } })) {
    slug = `${slugBase}-${i++}`
  }
  
  const created = await prisma.property.create({
    data: {
      ...data,
      slug,
      images: data.images?.length ? {
        create: data.images.map((url, idx) => ({
          url,
          order: idx
        }))
      } : undefined,
    },
    include: {
      images: true
    },
  })
  
  return NextResponse.json(created, { status: 201 })
}
