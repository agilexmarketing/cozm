import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { languages, defaultLanguage, getLanguageFromPath } from './lib/i18n'

function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip middleware for API routes, static files, and special Next.js routes
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }
  
  // Check if pathname starts with a language code
  const pathnameHasLocale = Object.keys(languages).some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  // If no language in pathname and it's not the default language route, redirect
  if (!pathnameHasLocale && pathname !== '/') {
    // Don't redirect admin routes without language - let NextAuth handle them
    if (pathname.startsWith('/admin')) {
      return NextResponse.next()
    }
  }
  
  return NextResponse.next()
}

export default withAuth(middleware, {
  callbacks: {
    authorized: ({ token, req }) => {
      // Only protect admin routes
      if (req.nextUrl.pathname.startsWith('/admin') && !req.nextUrl.pathname.includes('/login')) {
        return !!token
      }
      return true
    },
  },
})

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap).*)',
  ],
}
