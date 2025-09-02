import { ro } from './ro'
import { en } from './en'
import { fr } from './fr'
import { de } from './de'
import type { Language } from '../i18n'

export const translations = {
  ro,
  en,
  fr,
  de
} as const

export type TranslationKey = keyof typeof ro
export type Translations = typeof ro

export function getTranslations(language: Language): Translations {
  return translations[language] || translations.ro
}

// Helper function to get nested translation values
export function getNestedTranslation(
  translations: Translations, 
  key: string
): string {
  const keys = key.split('.')
  let value: any = translations
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key
}
