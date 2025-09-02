import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function PropertyDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const property = await prisma.property.findUnique({
    where: { slug: params.slug },
    include: {
      images: {
        orderBy: { order: 'asc' }
      }
    }
  })
  
  if (!property) {
    return notFound()
  }
  
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Link 
          href="/properties"
          style={{
            color: '#3b82f6',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}
        >
          ← Înapoi la proprietăți
        </Link>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '2fr 1fr',
        gap: '40px',
        alignItems: 'start'
      }}>
        <div>
          {/* Images */}
          {property.images.length > 0 && (
            <div style={{ marginBottom: '30px' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: property.images.length === 1 
                  ? '1fr' 
                  : 'repeat(auto-fill, minmax(250px, 1fr))', 
                gap: 12,
                marginBottom: '20px'
              }}>
                {property.images.map((image) => (
                  <img 
                    key={image.id} 
                    src={image.url} 
                    alt={property.title} 
                    style={{ 
                      width: '100%', 
                      height: property.images.length === 1 ? 400 : 220, 
                      objectFit: 'cover', 
                      borderRadius: 8
                    }} 
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Description */}
          {property.description && (
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600', 
                marginBottom: '15px',
                color: '#1f2937'
              }}>
                Descriere
              </h2>
              <p style={{ 
                lineHeight: '1.6', 
                color: '#374151',
                fontSize: '1rem'
              }}>
                {property.description}
              </p>
            </div>
          )}
          
          {/* Features */}
          <div>
            <h2 style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              marginBottom: '15px',
              color: '#1f2937'
            }}>
              Caracteristici Proprietate
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px'
            }}>
              {property.areaSqm && (
                <div style={{ 
                  padding: '12px', 
                  backgroundColor: '#f9fafb', 
                  borderRadius: '8px'
                }}>
                  <div style={{ fontWeight: '600', color: '#374151' }}>Suprafață</div>
                  <div style={{ color: '#6b7280' }}>{property.areaSqm} m²</div>
                </div>
              )}
              {property.bedrooms && (
                <div style={{ 
                  padding: '12px', 
                  backgroundColor: '#f9fafb', 
                  borderRadius: '8px'
                }}>
                  <div style={{ fontWeight: '600', color: '#374151' }}>Dormitoare</div>
                  <div style={{ color: '#6b7280' }}>{property.bedrooms}</div>
                </div>
              )}
              {property.bathrooms && (
                <div style={{ 
                  padding: '12px', 
                  backgroundColor: '#f9fafb', 
                  borderRadius: '8px'
                }}>
                  <div style={{ fontWeight: '600', color: '#374151' }}>Băi</div>
                  <div style={{ color: '#6b7280' }}>{property.bathrooms}</div>
                </div>
              )}
              <div style={{ 
                padding: '12px', 
                backgroundColor: '#f9fafb', 
                borderRadius: '8px'
              }}>
                <div style={{ fontWeight: '600', color: '#374151' }}>Tip</div>
                <div style={{ color: '#6b7280' }}>
                  {property.type === 'SALE' ? 'De Vânzare' : 'De Închiriat'}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div style={{ 
          position: 'sticky', 
          top: '20px'
        }}>
          <div style={{ 
            border: '1px solid #e5e7eb', 
            borderRadius: '12px', 
            padding: '24px',
            backgroundColor: 'white'
          }}>
            <h1 style={{ 
              fontSize: '1.8rem', 
              fontWeight: 'bold', 
              marginBottom: '15px',
              color: '#1f2937'
            }}>
              {property.title}
            </h1>
            
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#059669',
              marginBottom: '15px'
            }}>
              {property.price 
                ? `${property.price.toLocaleString()} ${property.currency}` 
                : 'Preț la cerere'
              }
            </div>
            
            <div style={{ 
              color: '#6b7280', 
              marginBottom: '20px',
              fontSize: '1rem'
            }}>
              📍 {property.city}{property.region ? `, ${property.region}` : ''}
            </div>
            
            {property.address && (
              <div style={{ 
                color: '#6b7280', 
                marginBottom: '20px',
                fontSize: '0.9rem'
              }}>
                {property.address}
              </div>
            )}
            
            <button style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '12px'
            }}>
              Contactează Agentul
            </button>
            
            <button style={{
              width: '100%',
              padding: '12px',
              backgroundColor: 'transparent',
              color: '#3b82f6',
              border: '2px solid #3b82f6',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Programează Vizionare
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
