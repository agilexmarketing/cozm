'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from '@/hooks/useTranslations'

export default function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  const { t } = useTranslations()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const goToPage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(pageNumber))
    router.push(`${pathname}?${params.toString()}`)
  }
  
  if (totalPages <= 1) return null
  
  return (
    <div style={{ 
      display: 'flex', 
      gap: 8, 
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px'
    }}>
      <button 
        disabled={page <= 1} 
        onClick={() => goToPage(page - 1)}
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          backgroundColor: page <= 1 ? '#f3f4f6' : 'white',
          cursor: page <= 1 ? 'not-allowed' : 'pointer',
          color: page <= 1 ? '#9ca3af' : '#374151'
        }}
      >
        {t('previous')}
      </button>
      
      <span style={{ 
        padding: '8px 12px',
        fontSize: '0.9rem',
        color: '#6b7280'
      }}>
        {t('page')} {page} {t('of')} {totalPages}
      </span>
      
      <button 
        disabled={page >= totalPages} 
        onClick={() => goToPage(page + 1)}
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          backgroundColor: page >= totalPages ? '#f3f4f6' : 'white',
          cursor: page >= totalPages ? 'not-allowed' : 'pointer',
          color: page >= totalPages ? '#9ca3af' : '#374151'
        }}
      >
        {t('next')}
      </button>
    </div>
  )
}
