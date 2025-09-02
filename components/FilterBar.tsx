'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useTranslations } from '@/hooks/useTranslations'

export default function FilterBar() {
  const { t } = useTranslations()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const [location, setLocation] = useState(searchParams.get('location') ?? '')
  const [minPrice, setMinPrice] = useState(searchParams.get('price_min') ?? '')
  const [maxPrice, setMaxPrice] = useState(searchParams.get('price_max') ?? '')
  const [type, setType] = useState(searchParams.get('type') ?? '')

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (location) {
      params.set('location', location)
    } else {
      params.delete('location')
    }
    
    if (minPrice) {
      params.set('price_min', minPrice)
    } else {
      params.delete('price_min')
    }
    
    if (maxPrice) {
      params.set('price_max', maxPrice)
    } else {
      params.delete('price_max')
    }
    
    if (type) {
      params.set('type', type)
    } else {
      params.delete('type')
    }
    
    params.set('page', '1')
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div style={{ 
      display: 'grid', 
      gap: 8, 
      gridTemplateColumns: '1fr 120px 120px 120px auto',
      alignItems: 'center'
    }}>
      <input 
        placeholder={t('filters.location')} 
        value={location} 
        onChange={(e) => setLocation(e.target.value)}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
      />
      <input 
        placeholder={t('filters.minPrice')} 
        type="number"
        value={minPrice} 
        onChange={(e) => setMinPrice(e.target.value)}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
      />
      <input 
        placeholder={t('filters.maxPrice')} 
        type="number"
        value={maxPrice} 
        onChange={(e) => setMaxPrice(e.target.value)}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
      />
      <select 
        value={type} 
        onChange={(e) => setType(e.target.value)}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
      >
        <option value="">{t('filters.allTypes')}</option>
        <option value="SALE">{t('filters.sale')}</option>
        <option value="RENT">{t('filters.rent')}</option>
      </select>
      <button 
        onClick={applyFilters}
        style={{ 
          padding: '8px 16px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          border: 'none', 
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        {t('filters.filter')}
      </button>
    </div>
  )
}
