import { prisma } from '@/lib/db'
import PropertyCard from '@/components/PropertyCard'
import FilterBar from '@/components/FilterBar'
import SortSelect from '@/components/SortSelect'
import Pagination from '@/components/Pagination'
import ListStagger from '@/components/ListStagger'

export const dynamic = 'force-dynamic'

interface SearchParams {
  [key: string]: string | string[] | undefined
}

export default async function PropertiesPage({ 
  searchParams 
}: { 
  searchParams: SearchParams 
}) {
  const page = Number(searchParams.page ?? 1)
  const perPage = Number(searchParams.per_page ?? 12)
  
  // Build where clause
  const where: any = { status: 'ACTIVE' }
  
  const location = (searchParams.location as string) || ''
  if (location) {
    where.OR = [
      { city: { contains: location, mode: 'insensitive' } },
      { region: { contains: location, mode: 'insensitive' } }
    ]
  }
  
  const priceMin = searchParams.price_min ? Number(searchParams.price_min) : undefined
  const priceMax = searchParams.price_max ? Number(searchParams.price_max) : undefined
  if (priceMin || priceMax) {
    where.price = {
      ...(priceMin ? { gte: priceMin } : {}),
      ...(priceMax ? { lte: priceMax } : {})
    }
  }
  
  const type = (searchParams.type as string) || ''
  if (type && (type === 'SALE' || type === 'RENT')) {
    where.type = type
  }
  
  // Build orderBy clause
  const sort = (searchParams.sort as string) || ''
  const orderBy = sort === 'price_desc' 
    ? { price: 'desc' as const } 
    : sort === 'price_asc' 
    ? { price: 'asc' as const } 
    : { listedAt: 'desc' as const }
  
  const skip = (page - 1) * perPage
  
  // Fetch data
  const [total, properties] = await Promise.all([
    prisma.property.count({ where }),
    prisma.property.findMany({
      where,
      orderBy,
      skip,
      take: perPage,
      include: {
        images: {
          orderBy: { order: 'asc' }
        }
      }
    }),
  ])
  
  const totalPages = Math.ceil(total / perPage)
  
  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          marginBottom: '20px',
          color: '#1f2937'
        }}>
          Proprietăți {type === 'SALE' ? 'de Vânzare' : type === 'RENT' ? 'de Închiriat' : ''}
        </h1>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end',
          gap: '20px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <FilterBar />
          </div>
          <div>
            <SortSelect />
          </div>
        </div>
        
        <div style={{ 
          color: '#6b7280', 
          fontSize: '0.9rem',
          marginBottom: '20px'
        }}>
          Se afișează {properties.length} din {total} proprietăți
          {location && ` în "${location}"`}
          {type && ` ${type === 'SALE' ? 'de vânzare' : 'de închiriat'}`}
        </div>
      </div>
      
      {properties.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px',
          color: '#6b7280'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏠</div>
          <h2 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '10px',
            color: '#374151'
          }}>
            Nu s-au găsit proprietăți
          </h2>
          <p>Încearcă să ajustezi filtrele de căutare pentru a găsi mai multe proprietăți.</p>
        </div>
      ) : (
        <>
          <ListStagger>
            {properties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property as any} 
              />
            ))}
          </ListStagger>
          
          <div style={{ marginTop: '40px' }}>
            <Pagination page={page} totalPages={totalPages} />
          </div>
        </>
      )}
    </div>
  )
}
