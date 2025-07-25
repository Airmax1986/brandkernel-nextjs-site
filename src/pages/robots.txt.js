export default function Robots() {
  // This component doesn't render anything
}

export async function getServerSideProps({ res }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkernel.com'
  
  const robots = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Specific rules for common bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Block access to admin areas and API routes
User-agent: *
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /.env
Disallow: /.env.local
Disallow: /package.json
Disallow: /package-lock.json
Disallow: /yarn.lock
Disallow: /node_modules/

# Allow access to important files
Allow: /favicon.ico
Allow: /robots.txt
Allow: /sitemap.xml
`

  res.setHeader('Content-Type', 'text/plain')
  res.write(robots)
  res.end()

  return {
    props: {},
  }
}
