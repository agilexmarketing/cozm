import { prisma } from '@/lib/db'
import { languages } from '@/lib/i18n'

export async function GET() {
  const baseUrl = process.env.NEXTAUTH_URL || 'https://cozm.agilemedia.com'
  
  // Get all properties for dynamic URLs
  const properties = await prisma.property.findMany({
    where: { status: 'ACTIVE' },
    select: { slug: true, updatedAt: true }
  })
  
  const currentDate = new Date().toISOString()
  
  // Generate URLs for all languages
  const urls: string[] = []
  
  Object.keys(languages).forEach(lang => {
    const langPrefix = lang === 'ro' ? '' : `/${lang}`
    
    // Static pages
    const staticPages = [
      { url: `${baseUrl}${langPrefix}`, priority: '1.0', changefreq: 'weekly' },
      { url: `${baseUrl}${langPrefix}/properties`, priority: '0.9', changefreq: 'daily' },
      { url: `${baseUrl}${langPrefix}/admin`, priority: '0.3', changefreq: 'monthly' },
      { url: `${baseUrl}${langPrefix}/admin/login`, priority: '0.3', changefreq: 'monthly' }
    ]
    
    staticPages.forEach(page => {
      urls.push(`
  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
    })
    
    // Dynamic property pages
    properties.forEach(property => {
      urls.push(`
  <url>
    <loc>${baseUrl}${langPrefix}/properties/${property.slug}</loc>
    <lastmod>${property.updatedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`)
    })
  })
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
