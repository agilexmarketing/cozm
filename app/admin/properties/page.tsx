import { prisma } from '@/lib/db'
import Link from 'next/link'

export default async function AdminPropertiesPage() {
  const properties = await prisma.property.findMany({
    orderBy: { updatedAt: 'desc' },
    take: 100,
    include: {
      images: {
        take: 1,
        orderBy: { order: 'asc' }
      }
    }
  })
  
  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold',
          color: '#1f2937'
        }}>
          Properties Management
        </h1>
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Add New Property
        </button>
      </div>
      
      <div style={{ 
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <th style={{ 
                padding: '12px 16px', 
                textAlign: 'left',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Property
              </th>
              <th style={{ 
                padding: '12px 16px', 
                textAlign: 'left',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Location
              </th>
              <th style={{ 
                padding: '12px 16px', 
                textAlign: 'left',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Price
              </th>
              <th style={{ 
                padding: '12px 16px', 
                textAlign: 'left',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Type
              </th>
              <th style={{ 
                padding: '12px 16px', 
                textAlign: 'left',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Status
              </th>
              <th style={{ 
                padding: '12px 16px', 
                textAlign: 'left',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr 
                key={property.id} 
                style={{ 
                  borderBottom: index < properties.length - 1 ? '1px solid #f3f4f6' : 'none'
                }}
              >
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {property.images[0] && (
                      <img 
                        src={property.images[0].url} 
                        alt={property.title}
                        style={{ 
                          width: 48, 
                          height: 48, 
                          objectFit: 'cover', 
                          borderRadius: '6px'
                        }}
                      />
                    )}
                    <div>
                      <Link 
                        href={`/properties/${property.slug}`}
                        style={{ 
                          fontWeight: '600',
                          color: '#3b82f6',
                          textDecoration: 'none'
                        }}
                      >
                        {property.title}
                      </Link>
                      <div style={{ 
                        fontSize: '0.8rem', 
                        color: '#6b7280',
                        marginTop: '2px'
                      }}>
                        {property.slug}
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '12px 16px', color: '#374151' }}>
                  {property.city}{property.region ? `, ${property.region}` : ''}
                </td>
                <td style={{ padding: '12px 16px', color: '#374151' }}>
                  {property.price 
                    ? `${property.price.toLocaleString()} ${property.currency}` 
                    : '-'
                  }
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    backgroundColor: property.type === 'SALE' ? '#dbeafe' : '#d1fae5',
                    color: property.type === 'SALE' ? '#1d4ed8' : '#065f46'
                  }}>
                    {property.type}
                  </span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    backgroundColor: property.status === 'ACTIVE' 
                      ? '#d1fae5' 
                      : property.status === 'INACTIVE' 
                      ? '#fee2e2' 
                      : '#fef3c7',
                    color: property.status === 'ACTIVE' 
                      ? '#065f46' 
                      : property.status === 'INACTIVE' 
                      ? '#991b1b' 
                      : '#92400e'
                  }}>
                    {property.status}
                  </span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      padding: '4px 8px',
                      fontSize: '0.8rem',
                      backgroundColor: 'transparent',
                      color: '#3b82f6',
                      border: '1px solid #3b82f6',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}>
                      Edit
                    </button>
                    <button style={{
                      padding: '4px 8px',
                      fontSize: '0.8rem',
                      backgroundColor: 'transparent',
                      color: '#dc2626',
                      border: '1px solid #dc2626',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {properties.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            color: '#6b7280'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏠</div>
            <h2 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '8px',
              color: '#374151'
            }}>
              No properties yet
            </h2>
            <p>Add your first property to get started.</p>
          </div>
        )}
      </div>
    </div>
  )
}
