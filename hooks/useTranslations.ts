'use client'

import { usePathname } from 'next/navigation'
import { getLanguageFromPath } from '@/lib/i18n'
import { getTranslations, getNestedTranslation } from '@/lib/translations'
import type { Translations } from '@/lib/translations'

export function useTranslations() {
  const pathname = usePathname()
  const language = getLanguageFromPath(pathname)
  const translations = getTranslations(language)
  
  const t = (key: string): string => {
    return getNestedTranslation(translations, key)
  }
  
  const tArray = (key: string): string[] => {
    const value = getNestedTranslation(translations, key)
    if (Array.isArray(value)) {
      return value
    }
    return []
  }
  
  return {
    t,
    tArray,
    language,
    translations
  }
}
