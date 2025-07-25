import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { getAllPosts } from '@/lib/contentful'

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - BrandKernel</title>
        <meta name="description" content="Insights and tips on personal branding, AI-powered brand discovery, and building an authentic professional presence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkernel.com'}/blog`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Blog - BrandKernel" />
        <meta property="og:description" content="Insights and tips on personal branding, AI-powered brand discovery, and building an authentic professional presence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkernel.com'}/blog`} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Personal Branding Insights
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Discover strategies, tips, and insights to build your authentic personal brand 
                with the help of AI-powered guidance.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Blog Posts */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">No posts yet</h2>
              <p className="text-gray-600">
                We're working on some great content for you. Check back soon!
              </p>
            </motion.div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="cursor-pointer">
                      {post.headerImage && (
                        <div className="aspect-video relative">
                          <Image
                            src={post.headerImage.startsWith('//') ? `https:${post.headerImage}` : post.headerImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                          {post.author && (
                            <>
                              <span className="mx-2">•</span>
                              <span>{post.author.name}</span>
                            </>
                          )}
                        </div>
                        
                        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h2>
                        
                        {post.summary && (
                          <p className="text-gray-600 line-clamp-3 mb-4">
                            {post.summary}
                          </p>
                        )}
                        
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </main>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "BrandKernel Blog",
              "description": "Insights and tips on personal branding, AI-powered brand discovery, and building an authentic professional presence.",
              "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://brandkernel.com"}/blog`,
              "publisher": {
                "@type": "Organization",
                "name": "BrandKernel",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://brandkernel.com"}/logo.png`
                }
              },
              "blogPost": posts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.summary || post.description,
                "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://brandkernel.com"}/blog/${post.slug}`,
                "datePublished": post.date,
                "author": post.author ? {
                  "@type": "Person",
                  "name": post.author.name
                } : undefined,
                "image": post.headerImage ? (post.headerImage.startsWith('//') ? `https:${post.headerImage}` : post.headerImage) : undefined
              }))
            })
          }}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  try {
    const posts = await getAllPosts()
    
    return {
      props: {
        posts,
      },
      revalidate: 60, // Revalidate every minute
    }
  } catch (error) {
    console.error('Error fetching posts for blog page:', error)
    return {
      props: {
        posts: [],
      },
      revalidate: 60,
    }
  }
}
