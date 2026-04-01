import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  subtitle?: string
  excerpt?: string
  date?: string
  category?: string
  tags?: string
  coverImage?: string
  draft?: boolean
  content?: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        subtitle: data.subtitle || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        category: data.category || '',
        tags: data.tags || '',
        coverImage: data.coverImage || '',
        draft: data.draft || false,
      }
    })
    .filter(post => !post.draft)
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return 0
    })

  return posts
}

export function getPost(slug: string): (Post & { prev?: Post; next?: Post; content?: string }) | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)

  const prev = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : undefined
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined

  return {
    slug,
    title: data.title || '',
    subtitle: data.subtitle || '',
    excerpt: data.excerpt || '',
    date: data.date || '',
    category: data.category || '',
    tags: data.tags || '',
    coverImage: data.coverImage || '',
    draft: data.draft || false,
    content,
    prev,
    next,
  }
}
