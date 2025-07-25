// Contentful API with graceful fallbacks for missing environment variables

import { createClient } from 'contentful'

// Safe environment variable access
const getEnvVar = (name) => {
  if (typeof process !== 'undefined' && process.env) {
    return process.env[name]
  }
  return undefined
}

// Create client with fallback
function createContentfulClient() {
  const spaceId = getEnvVar('CONTENTFUL_SPACE_ID')
  const accessToken = getEnvVar('CONTENTFUL_ACCESS_TOKEN')

  if (!spaceId || !accessToken) {
    console.warn('⚠️ Contentful credentials not available - returning null client')
    return null
  }

  try {
    return createClient({
      space: spaceId,
      accessToken: accessToken,
    })
  } catch (error) {
    console.error('❌ Error creating Contentful client:', error)
    return null
  }
}

function createPreviewClient() {
  const spaceId = getEnvVar('CONTENTFUL_SPACE_ID')
  const previewToken = getEnvVar('CONTENTFUL_PREVIEW_ACCESS_TOKEN')

  if (!spaceId || !previewToken) {
    return null
  }

  try {
    return createClient({
      space: spaceId,
      accessToken: previewToken,
      host: 'preview.contentful.com',
    })
  } catch (error) {
    console.error('❌ Error creating Contentful preview client:', error)
    return null
  }
}

const client = createContentfulClient()
const previewClient = createPreviewClient()

const getClient = (preview = false) => {
  if (preview && previewClient) return previewClient
  return client
}

// Blog Posts with comprehensive error handling
export async function getAllPosts(isDraftMode = false) {
  // Return empty array if client not available
  if (!client) {
    console.warn('⚠️ Contentful client not available - returning empty posts array')
    return []
  }

  try {
    console.log(`🔍 Fetching posts (draft mode: ${isDraftMode})...`)
    
    const entries = await getClient(isDraftMode).getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
    })

    console.log(`✅ Found ${entries.items.length} posts`)

    return entries.items.map((item) => ({
      slug: item.fields?.slug || '',
      title: item.fields?.title || 'Untitled',
      date: item.fields?.date || item.sys?.createdAt || new Date().toISOString(),
      summary: item.fields?.summary || '',
      description: item.fields?.description || '',
      headerImage: item.fields?.headerImage?.fields?.file?.url || null,
      heroImage: item.fields?.heroImage?.fields?.file?.url || null,
      content: item.fields?.content || '',
      tags: item.fields?.tags || [],
      author: item.fields?.author ? {
        name: item.fields.author.fields?.name || 'Anonymous',
      } : null,
    }))
  } catch (error) {
    console.error('❌ Error fetching posts:', error)
    return []
  }
}

// Single post with error handling
export async function getPost(slug, isDraftMode = false) {
  if (!client || !slug) {
    console.warn('⚠️ Contentful client not available or no slug provided')
    return null
  }

  try {
    console.log(`🔍 Fetching post with slug: ${slug} (draft mode: ${isDraftMode})`)
    
    const entries = await getClient(isDraftMode).getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    })

    if (!entries?.items || entries.items.length === 0) {
      console.log(`❌ Post not found: ${slug}`)
      return null
    }

    const post = entries.items[0]
    console.log(`✅ Found post: ${post.fields?.title || 'Untitled'}`)

    return {
      slug: post.fields?.slug || slug,
      title: post.fields?.title || 'Untitled',
      date: post.fields?.date || post.sys?.createdAt || new Date().toISOString(),
      content: post.fields?.content || '',
      summary: post.fields?.summary || '',
      description: post.fields?.description || '',
      headerImage: post.fields?.headerImage?.fields?.file?.url || null,
      heroImage: post.fields?.heroImage?.fields?.file?.url || null,
      tags: post.fields?.tags || [],
      author: post.fields?.author ? {
        name: post.fields.author.fields?.name || 'Anonymous',
      } : null,
    }
  } catch (error) {
    console.error(`❌ Error fetching post ${slug}:`, error)
    return null
  }
}

// All slugs for static generation
export async function getAllPostSlugs() {
  if (!client) {
    console.warn('⚠️ Contentful client not available - returning empty slugs array')
    return []
  }

  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      select: 'fields.slug',
    })

    if (!entries?.items) {
      return []
    }

    console.log(`✅ Found ${entries.items.length} slugs for static generation`)

    return entries.items
      .filter(item => item.fields?.slug)
      .map((item) => ({
        params: {
          slug: item.fields.slug,
        },
      }))
  } catch (error) {
    console.error('❌ Error fetching slugs:', error)
    return []
  }
}

// Authors with error handling
export async function getAllAuthors(isDraftMode = false) {
  if (!client) return []

  try {
    const entries = await getClient(isDraftMode).getEntries({
      content_type: 'author',
      order: 'fields.name',
    })

    if (!entries?.items) {
      return []
    }

    return entries.items.map((item) => ({
      name: item.fields?.name || 'Anonymous',
      bio: item.fields?.bio || '',
    }))
  } catch (error) {
    console.error('❌ Error fetching authors:', error)
    return []
  }
}

// Posts by category with error handling
export async function getPostsByCategory(category, isDraftMode = false) {
  if (!client || !category) return []

  try {
    const entries = await getClient(isDraftMode).getEntries({
      content_type: 'blogPost',
      'fields.category.sys.id': category,
      order: '-sys.createdAt',
    })

    if (!entries?.items) {
      return []
    }

    return entries.items.map((item) => ({
      slug: item.fields?.slug || '',
      title: item.fields?.title || 'Untitled',
      date: item.fields?.date || item.sys?.createdAt || new Date().toISOString(),
      summary: item.fields?.summary || '',
      headerImage: item.fields?.headerImage?.fields?.file?.url || null,
    }))
  } catch (error) {
    console.error('❌ Error fetching posts by category:', error)
    return []
  }
}
