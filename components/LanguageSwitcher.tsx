'use client'

import { usePathname, useRouter } from 'next/navigation'
import { languages, addLanguageToPath, removeLanguageFromPath, getLanguageFromPath } from '@/lib/i18n'
import type { Language } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const currentLanguage = getLanguageFromPath(pathname)
  
  const switchLanguage = (newLanguage: Language) => {
    const cleanPath = removeLanguageFromPath(pathname)
    const newPath = addLanguageToPath(cleanPath, newLanguage)
    router.push(newPath)
  }
  
  return (
    <div style={{ 
      position: 'relative',
      display: 'inline-block'
    }}>
      <select
        value={currentLanguage}
        onChange={(e) => switchLanguage(e.target.value as Language)}
        style={{
          padding: '6px 12px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          backgroundColor: 'white',
          fontSize: '0.9rem',
          cursor: 'pointer',
          minWidth: '80px'
        }}
      >
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}
