import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { parse } from 'csv-parse/sync'

export const runtime = 'nodejs'
export const maxDuration = 60

const slugify = (s: string) => 
  s.toLowerCase()
   .normalize('NFD')
   .replace(/[\u0300-\u036f]/g, '')
   .replace(/[^a-z0-9]+/g, '-')
   .replace(/(^-|-$)/g, '')

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File | null
  const upsert = (formData.get('upsert') ?? 'true').toString() === 'true'
  
  if (!file) {
    return NextResponse.json({ error: 'file missing' }, { status: 400 })
  }
  
  const csvContent = Buffer.from(await file.arrayBuffer()).toString('utf8')
  const rows = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true
  }) as any[]
  
  let created = 0
  let updated = 0
  
  for (const row of rows) {
    const title = row.title?.toString().trim()
    const city = row.city?.toString().trim()
    const slugBase = slugify(`${title}-${city ?? ''}`)
    
    const images: string[] = (row.images ?? '')
      .toString()
      .split(/[;,|]/)
      .map((s: string) => s.trim())
      .filter(Boolean)
    
    const propertyData = {
      title,
      description: row.description || null,
      type: (row.type || 'SALE').toUpperCase() as 'SALE' | 'RENT',
      status: (row.status || 'ACTIVE').toUpperCase() as any,
      price: row.price ? parseInt(row.price, 10) : null,
      currency: row.currency || 'EUR',
      city: city || null,
      region: row.region || null,
      address: row.address || null,
      lat: row.lat ? parseFloat(row.lat) : null,
      lng: row.lng ? parseFloat(row.lng) : null,
      bedrooms: row.bedrooms ? parseInt(row.bedrooms, 10) : null,
      bathrooms: row.bathrooms ? parseInt(row.bathrooms, 10) : null,
      areaSqm: row.areaSqm ? parseInt(row.areaSqm, 10) : null,
      externalId: row.externalId || null,
    }
    
    if (upsert && propertyData.externalId) {
      const result = await prisma.property.upsert({
        where: { externalId: propertyData.externalId },
        update: {
          ...propertyData,
          images: {
            deleteMany: {},
            create: images.map((url, idx) => ({
              url,
              order: idx
            })),
          },
        },
        create: {
          ...propertyData,
          slug: `${slugBase}-${Math.random().toString(36).slice(2, 6)}`,
          images: {
            create: images.map((url, idx) => ({
              url,
              order: idx
            }))
          },
        },
        include: {
          images: true
        },
      })
      
      if (result.createdAt.getTime() === result.updatedAt.getTime()) {
        created++
      } else {
        updated++
      }
    } else {
      let slug = slugBase
      let i = 1
      
      while (await prisma.property.findUnique({ where: { slug } })) {
        slug = `${slugBase}-${i++}`
      }
      
      await prisma.property.create({
        data: {
          ...propertyData,
          slug,
          images: {
            create: images.map((url, idx) => ({
              url,
              order: idx
            }))
          },
        },
      })
      
      created++
    }
  }
  
  return NextResponse.json({ created, updated })
}
