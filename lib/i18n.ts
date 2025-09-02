export const languages = {
  ro: 'Română',
  en: 'English', 
  fr: 'Français',
  de: 'Deutsch'
} as const

export type Language = keyof typeof languages
export const defaultLanguage: Language = 'ro'

export function getLanguageFromPath(pathname: string): Language {
  const segments = pathname.split('/')
  const langSegment = segments[1]
  
  if (langSegment && langSegment in languages) {
    return langSegment as Language
  }
  
  return defaultLanguage
}

export function removeLanguageFromPath(pathname: string): string {
  const segments = pathname.split('/')
  const langSegment = segments[1]
  
  if (langSegment && langSegment in languages) {
    return '/' + segments.slice(2).join('/')
  }
  
  return pathname
}

export function addLanguageToPath(pathname: string, language: Language): string {
  if (language === defaultLanguage) {
    return removeLanguageFromPath(pathname)
  }
  
  const cleanPath = removeLanguageFromPath(pathname)
  return `/${language}${cleanPath === '/' ? '' : cleanPath}`
}
