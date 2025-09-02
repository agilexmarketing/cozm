import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'

export const runtime = 'nodejs'

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const property = await prisma.property.findUnique({
    where: { id: params.id },
    include: {
      images: {
        orderBy: { order: 'asc' }
      }
    }
  })
  
  if (!property) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  
  return NextResponse.json(property)
}

const updateSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  type: z.enum(['SALE', 'RENT']).optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'DRAFT']).optional(),
  price: z.number().int().optional(),
  currency: z.string().optional(),
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

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json()
  const { images, ...rest } = updateSchema.parse(body)
  
  const updated = await prisma.property.update({
    where: { id: params.id },
    data: {
      ...rest,
      images: images ? {
        deleteMany: {},
        create: images.map((url: string, idx: number) => ({
          url,
          order: idx
        })),
      } : undefined,
    },
    include: {
      images: true
    },
  })
  
  return NextResponse.json(updated)
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  await prisma.property.delete({
    where: { id: params.id }
  })
  
  return NextResponse.json({ ok: true })
}
