'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from '@/hooks/useTranslations'

export default function SortSelect() {
  const { t } = useTranslations()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (value) {
      params.set('sort', value)
    } else {
      params.delete('sort')
    }
    
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <select 
      defaultValue={searchParams.get('sort') ?? ''} 
      onChange={(e) => handleSortChange(e.target.value)}
      style={{ 
        padding: '8px 12px', 
        border: '1px solid #d1d5db', 
        borderRadius: '6px',
        backgroundColor: 'white'
      }}
    >
      <option value="">{t('filters.sort.newest')}</option>
      <option value="price_asc">{t('filters.sort.priceAsc')}</option>
      <option value="price_desc">{t('filters.sort.priceDesc')}</option>
    </select>
  )
}
