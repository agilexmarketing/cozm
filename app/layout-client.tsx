'use client'

import { useTranslations } from '@/hooks/useTranslations'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Link from 'next/link'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const { t } = useTranslations()
  
  return (
    <div style={{ 
      maxWidth: 1200, 
      margin: '0 auto', 
      padding: '0 20px',
      minHeight: '100vh'
    }}>
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px 0',
        borderBottom: '1px solid #e5e7eb',
        marginBottom: '30px'
      }}>
        <Link 
          href="/" 
          style={{ 
            fontSize: '1.3rem', 
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#1f2937',
            lineHeight: '1.2'
          }}
        >
          {t('agent.name')}
          <div style={{ 
            fontSize: '0.8rem', 
            color: '#6b7280', 
            fontWeight: 'normal' 
          }}>
            {t('agent.title')}
          </div>
        </Link>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 24
        }}>
          <nav style={{ 
            display: 'flex', 
            gap: 24,
            alignItems: 'center'
          }}>
            <Link 
              href="/properties"
              style={{ 
                textDecoration: 'none',
                color: '#374151',
                fontWeight: '500'
              }}
            >
              {t('nav.properties')}
            </Link>
            <Link 
              href="/admin"
              style={{ 
                textDecoration: 'none',
                color: '#374151',
                fontWeight: '500'
              }}
            >
              {t('nav.admin')}
            </Link>
          </nav>
          
          <LanguageSwitcher />
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer style={{
        borderTop: '1px solid #e5e7eb',
        marginTop: '60px',
        paddingTop: '20px',
        paddingBottom: '20px',
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '0.9rem'
      }}>
        {t('footer.copyright')}
      </footer>
    </div>
  )
}
