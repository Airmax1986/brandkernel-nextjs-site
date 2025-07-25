import Head from 'next/head'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import WaitlistForm from '@/components/WaitlistForm'
import Navigation from '@/components/Navigation'
import { getAllPosts } from '@/lib/contentful'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>BrandKernel - Personal Brand Discovery with AI</title>
        <meta name="description" content="Finally stand out with positioning that feels like you. We guide you through a deep, personal brand discovery, powered by an empathetic AI brand consultant." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="BrandKernel - Personal Brand Discovery with AI" />
        <meta property="og:description" content="Finally stand out with positioning that feels like you. We guide you through a deep, personal brand discovery, powered by an empathetic AI brand consultant." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkernel.com'} />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BrandKernel - Personal Brand Discovery with AI" />
        <meta name="twitter:description" content="Finally stand out with positioning that feels like you. We guide you through a deep, personal brand discovery, powered by an empathetic AI brand consultant." />
        <meta name="twitter:image" content="/og-image.png" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BrandKernel" />
        <meta name="keywords" content="personal branding, AI brand consultant, brand discovery, positioning, personal brand strategy" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkernel.com'} />
      </Head>

      <div className="min-h-screen bg-hero-gradient relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full blur-3xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative z-10">
          
          {/* Hero Section */}
          <section className="text-center pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  Finally stand out – with{' '}
                  <span className="text-brand-orange">
                    positioning that feels like you.
                  </span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto"
                >
                  We guide you through a deep, personal brand discovery, powered by 
                  an empathetic AI brand consultant. Together, we'll uncover the core 
                  of your personality and what truly sets you apart.{' '}
                  <span className="underline decoration-white/50 decoration-2 underline-offset-4 cursor-pointer hover:decoration-white/80 transition-colors">
                    Read more
                  </span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-16"
                >
                  <button className="group bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 mx-auto">
                    <ArrowRightIcon className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
                    Start your brand discovery now – receive your personal brand book after.
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Waitlist Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pb-16 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-2xl mx-auto">
              <WaitlistForm />
            </div>
          </motion.section>

        </main>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BrandKernel",
              "description": "Personal brand discovery powered by AI brand consultant",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://brandkernel.com",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://brandkernel.com"}/logo.png`,
              "sameAs": [],
              "founder": {
                "@type": "Person",
                "name": "BrandKernel Team"
              },
              "foundingDate": "2024",
              "description": "We guide you through a deep, personal brand discovery, powered by an empathetic AI brand consultant.",
              "serviceType": "Personal Branding Consultation",
              "areaServed": "Worldwide"
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
        posts: posts.slice(0, 3), // Get latest 3 posts for preview
      },
      revalidate: 60, // Revalidate every minute
    }
  } catch (error) {
    console.error('Error fetching posts for homepage:', error)
    return {
      props: {
        posts: [],
      },
      revalidate: 60,
    }
  }
}
