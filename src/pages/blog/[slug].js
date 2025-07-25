import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Navigation from '@/components/Navigation'
import { getPost, getAllPostSlugs } from '@/lib/contentful'
import { ArrowLeftIcon, CalendarIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline'

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <>
        <Head>
          <title>Post Not Found - BrandKernel</title>
          <meta name="robots" content="noindex" />
        </Head>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </>
    )
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkernel.com'
  const postUrl = `${siteUrl}/blog/${post.slug}`
  const postImage = post.heroImage || post.headerImage

  return (
    <>
      <Head>
        <title>{post.title} - BrandKernel Blog</title>
        <meta name="description" content={post.summary || post.description || `Read about ${post.title} on the BrandKernel blog.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={postUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${post.title} - BrandKernel Blog`} />
        <meta property="og:description" content={post.summary || post.description || `Read about ${post.title} on the BrandKernel blog.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        {postImage && (
          <meta property="og:image" content={postImage.startsWith('//') ? `https:${postImage}` : postImage} />
        )}
        <meta property="article:published_time" content={post.date} />
        {post.author && <meta property="article:author" content={post.author.name} />}
        {post.tags && post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} - BrandKernel Blog`} />
        <meta name="twitter:description" content={post.summary || post.description || `Read about ${post.title} on the BrandKernel blog.`} />
        {postImage && (
          <meta name="twitter:image" content={postImage.startsWith('//') ? `https:${postImage}` : postImage} />
        )}
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content={post.author?.name || 'BrandKernel'} />
        {post.tags && <meta name="keywords" content={post.tags.join(', ')} />}
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back to Blog Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Hero Image */}
          {postImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 aspect-video relative rounded-lg overflow-hidden"
            >
              <Image
                src={postImage.startsWith('//') ? `https:${postImage}` : postImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 896px"
              />
            </motion.div>
          )}

          {/* Post Header */}
          <header className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-gray-600 mb-6"
            >
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              {post.author && (
                <div className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4" />
                  <span>{post.author.name}</span>
                </div>
              )}
            </motion.div>

            {post.summary && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed mb-6"
              >
                {post.summary}
              </motion.p>
            )}

            {post.tags && post.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-2 flex-wrap"
              >
                <TagIcon className="w-4 h-4 text-gray-400" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}
          </header>

          {/* Post Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="prose prose-lg prose-orange max-w-none"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
                p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="text-gray-700">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-orange-400 pl-4 py-2 bg-orange-50 my-6 italic">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
                ),
                a: ({ href, children }) => (
                  <a href={href} className="text-orange-600 hover:text-orange-700 underline" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {post.content || 'No content available.'}
            </ReactMarkdown>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-gray-200 pt-8 mt-12"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Share this post</h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <span className="sr-only">Share on Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-700 transition-colors"
                >
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </article>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.summary || post.description,
              "image": postImage ? (postImage.startsWith('//') ? `https:${postImage}` : postImage) : undefined,
              "author": post.author ? {
                "@type": "Person",
                "name": post.author.name
              } : undefined,
              "publisher": {
                "@type": "Organization",
                "name": "BrandKernel",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteUrl}/logo.png`
                }
              },
              "datePublished": post.date,
              "dateModified": post.date,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": postUrl
              },
              "url": postUrl,
              "keywords": post.tags ? post.tags.join(', ') : undefined
            })
          }}
        />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  try {
    const paths = await getAllPostSlugs()
    return {
      paths,
      fallback: 'blocking', // Enable ISR for new posts
    }
  } catch (error) {
    console.error('Error fetching post slugs:', error)
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps({ params, preview = false }) {
  try {
    const post = await getPost(params.slug, preview)
    
    if (!post) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        post,
      },
      revalidate: 60, // Revalidate every minute
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return {
      notFound: true,
    }
  }
}
