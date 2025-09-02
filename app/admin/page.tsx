import Link from 'next/link'

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        marginBottom: '30px',
        color: '#1f2937'
      }}>
        Admin Dashboard
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        maxWidth: '800px'
      }}>
        <Link 
          href="/admin/properties"
          style={{
            display: 'block',
            padding: '24px',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: 'white',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <div style={{ 
            fontSize: '2rem', 
            marginBottom: '12px'
          }}>
            🏠
          </div>
          <h2 style={{ 
            fontSize: '1.3rem', 
            fontWeight: '600', 
            marginBottom: '8px',
            color: '#1f2937'
          }}>
            Manage Properties
          </h2>
          <p style={{ 
            color: '#6b7280',
            lineHeight: '1.5'
          }}>
            View, edit, and manage all properties in the system. Add new listings or update existing ones.
          </p>
        </Link>
        
        <Link 
          href="/admin/import"
          style={{
            display: 'block',
            padding: '24px',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: 'white',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <div style={{ 
            fontSize: '2rem', 
            marginBottom: '12px'
          }}>
            📁
          </div>
          <h2 style={{ 
            fontSize: '1.3rem', 
            fontWeight: '600', 
            marginBottom: '8px',
            color: '#1f2937'
          }}>
            Bulk Import
          </h2>
          <p style={{ 
            color: '#6b7280',
            lineHeight: '1.5'
          }}>
            Import multiple properties at once using CSV files. Perfect for adding large datasets quickly.
          </p>
        </Link>
        
        <div style={{
          padding: '24px',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{ 
            fontSize: '2rem', 
            marginBottom: '12px'
          }}>
            📊
          </div>
          <h2 style={{ 
            fontSize: '1.3rem', 
            fontWeight: '600', 
            marginBottom: '8px',
            color: '#1f2937'
          }}>
            Analytics
          </h2>
          <p style={{ 
            color: '#6b7280',
            lineHeight: '1.5'
          }}>
            View detailed analytics and reports about property performance and user engagement.
          </p>
          <div style={{ 
            marginTop: '12px',
            fontSize: '0.9rem',
            color: '#9ca3af'
          }}>
            Coming soon
          </div>
        </div>
      </div>
    </div>
  )
}
