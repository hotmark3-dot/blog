'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

interface Post {
  slug: string
  title: string
  subtitle?: string
  excerpt?: string
  date?: string
  category?: string
  tags?: string
  coverImage?: string
  draft?: boolean
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('全部')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const response = await fetch('/api/posts')
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['全部', '随笔', '商业洞察']
  const filteredPosts = selectedCategory === '全部'
    ? posts.filter(p => !p.draft)
    : posts.filter(p => !p.draft && p.category === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="header-content">
          <p className="header-tag animate-in">Welcome · 欢迎</p>
          <h1 className="header-title animate-in animate-in-delay-1">
            盛一伟的思考空间
          </h1>
          <p className="header-subtitle animate-in animate-in-delay-2">
            商品驱动型运营专家 · 分享商业洞察与生活随笔
          </p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="posts-section">
        {/* Category Filters */}
        <div className="posts-filters animate-in animate-in-delay-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="empty-state">
            <p>加载中...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="empty-state">
            <h3>暂无文章</h3>
            <p>该分类下还没有文章，敬请期待</p>
          </div>
        ) : (
          <div className="posts-grid">
            {filteredPosts.map((post, index) => (
              <Link
                href={`/posts/${post.slug}`}
                key={post.slug}
                className={`post-card animate-in animate-in-delay-${Math.min(index + 1, 4)}`}
              >
                <div className="post-cover">
                  {post.coverImage ? (
                    <img src={post.coverImage} alt={post.title} />
                  ) : (
                    <span className="post-cover-placeholder">
                      {post.category === '商业洞察' ? '💡' : '📝'}
                    </span>
                  )}
                  {post.category && (
                    <span className="post-category-badge">{post.category}</span>
                  )}
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    {post.date && (
                      <span className="post-date">
                        {format(new Date(post.date), 'yyyy-MM-dd', { locale: zhCN })}
                      </span>
                    )}
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  {post.excerpt && (
                    <p className="post-excerpt">{post.excerpt}</p>
                  )}
                  {post.tags && (
                    <div className="post-tags">
                      {post.tags.split(',').map((tag, i) => (
                        <span key={i} className="post-tag">{tag.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
