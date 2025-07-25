export default function Sitemap() {
  // This component doesn't render anything, it just generates the sitemap
}

export async function getServerSideProps({ res }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkernel.com'
  
  // Static pages
  const staticPages = [
    '',
    '/blog',
    '/about',
  ]
  
  try {
    // Dynamic import to avoid build issues
    const { getAllPosts } = await import('@/lib/contentful')
    
    // Get all blog posts
    const posts = await getAllPosts()
    
    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((staticPagePath) => {
          return `
            <url>
              <loc>${baseUrl}${staticPagePath}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${staticPagePath === '' ? '1.0' : '0.8'}</priority>
            </url>
          `
        })
        .join('')}
      ${posts && posts.length > 0 ? posts
        .filter(post => post && post.slug)
        .map((post) => {
          return `
            <url>
              <loc>${baseUrl}/blog/${post.slug}</loc>
              <lastmod>${new Date(post.date || new Date()).toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.6</priority>
            </url>
          `
        })
        .join('') : ''}
    </urlset>
    `

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()

    return {
      props: {},
    }
  } catch (error) {
    console.error('Error generating sitemap:', error)
    
    // Generate minimal sitemap with just static pages
    const minimalSitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((staticPagePath) => {
          return `
            <url>
              <loc>${baseUrl}${staticPagePath}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${staticPagePath === '' ? '1.0' : '0.8'}</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
    `

    res.setHeader('Content-Type', 'text/xml')
    res.write(minimalSitemap)
    res.end()

    return {
      props: {},
    }
  }
}
