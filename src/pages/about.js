import Head from 'next/head'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import WaitlistForm from '@/components/WaitlistForm'

export default function About() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brandkernel.com'

  return (
    <>
      <Head>
        <title>About BrandKernel - AI-Powered Personal Brand Discovery</title>
        <meta name="description" content="Learn about BrandKernel's mission to help you discover your authentic personal brand with the power of AI-driven consultation and empathetic guidance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${siteUrl}/about`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About BrandKernel - AI-Powered Personal Brand Discovery" />
        <meta property="og:description" content="Learn about BrandKernel's mission to help you discover your authentic personal brand with the power of AI-driven consultation and empathetic guidance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/about`} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About BrandKernel - AI-Powered Personal Brand Discovery" />
        <meta name="twitter:description" content="Learn about BrandKernel's mission to help you discover your authentic personal brand with the power of AI-driven consultation and empathetic guidance." />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              About BrandKernel
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              We believe everyone has a unique story worth telling. Our mission is to help you 
              discover and articulate your authentic personal brand through the power of 
              AI-driven consultation and empathetic guidance.
            </motion.p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg mx-auto"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                In today's crowded digital landscape, standing out feels impossible. We've all been there – 
                staring at a blank LinkedIn profile, struggling to write an "About" section, or wondering 
                how to present ourselves authentically in professional settings.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Traditional personal branding advice often feels generic and inauthentic. That's why we 
                created BrandKernel – an AI-powered platform that goes beyond surface-level tips to 
                understand the core of who you are.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our empathetic AI brand consultant doesn't just analyze your professional achievements; 
                it explores your values, personality, and unique perspective to help you build a personal 
                brand that truly feels like you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Empower Authenticity</h3>
                <p className="text-gray-600">
                  Help you discover and embrace your authentic self, rather than copying others or following generic templates.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Guidance</h3>
                <p className="text-gray-600">
                  Leverage AI technology to provide personalized insights and recommendations based on your unique personality and goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Actionable Results</h3>
                <p className="text-gray-600">
                  Deliver a comprehensive personal brand book with concrete strategies you can implement immediately.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How BrandKernel Works</h2>
              <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                      1
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Deep Discovery</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our AI consultant conducts an in-depth interview to understand your values, 
                    personality, experiences, and aspirations. This isn't a surface-level questionnaire – 
                    it's a thoughtful exploration of who you are at your core.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-8 text-center">
                    <svg className="w-20 h-20 text-orange-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row-reverse items-center gap-8"
              >
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                      2
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">AI Analysis</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our empathetic AI processes your responses to identify patterns, strengths, and unique 
                    qualities that make you stand out. It analyzes not just what you say, but how you say it, 
                    to understand your authentic voice and communication style.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-8 text-center">
                    <svg className="w-20 h-20 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                      3
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Personal Brand Book</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Receive a comprehensive, personalized brand guide that includes your unique value 
                    proposition, messaging framework, content strategy, and actionable steps to build 
                    your authentic presence across all platforms.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 text-center">
                    <svg className="w-20 h-20 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Discover Your Authentic Brand?</h2>
              <p className="text-xl text-gray-600">
                Join our waitlist and be among the first to experience AI-powered personal brand discovery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <WaitlistForm />
            </motion.div>
          </div>
        </section>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About BrandKernel",
              "description": "Learn about BrandKernel's mission to help you discover your authentic personal brand with the power of AI-driven consultation and empathetic guidance.",
              "url": `${siteUrl}/about`,
              "mainEntity": {
                "@type": "Organization",
                "name": "BrandKernel",
                "description": "AI-powered personal brand discovery platform",
                "url": siteUrl,
                "foundingDate": "2024",
                "founders": [{
                  "@type": "Person",
                  "name": "BrandKernel Team"
                }],
                "mission": "To help everyone discover and articulate their authentic personal brand through AI-driven consultation and empathetic guidance."
              }
            })
          }}
        />
      </div>
    </>
  )
}
