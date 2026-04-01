import Link from 'next/link'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { getPost, getAllPosts } from '@/lib/api'

interface PostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const slug = decodeURIComponent(params.slug)
  const post = getPost(slug)
  if (!post) {
    return { title: '文章未找到' }
  }
  return {
    title: `${post.title} | 盛一伟`,
    description: post.excerpt,
  }
}

export default function PostPage({ params }: PostPageProps) {
  const slug = decodeURIComponent(params.slug)
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="post-page">
        <div className="empty-state">
          <h3>文章未找到</h3>
          <p>该文章可能已被删除或移动</p>
          <Link href="/" style={{ color: 'var(--accent)', marginTop: '1rem', display: 'inline-block' }}>
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  const { content, prev, next } = post

  return (
    <article className="post-page">
      {/* Post Header */}
      <header className="post-header">
        <div className="post-meta">
          {post.date && (
            <span className="post-date">
              {format(new Date(post.date), 'yyyy年MM月dd日', { locale: zhCN })}
            </span>
          )}
          {post.category && (
            <span className="post-category-badge">{post.category}</span>
          )}
        </div>
        <h1 className="post-title">{post.title}</h1>
        {post.subtitle && (
          <p className="header-subtitle" style={{ marginTop: '0.5rem' }}>
            {post.subtitle}
          </p>
        )}
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="post-cover-large">
          <img src={post.coverImage} alt={post.title} />
        </div>
      )}

      {/* Post Body */}
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: content || '' }}
      />

      {/* Tags */}
      {post.tags && (
        <div className="post-tags" style={{ marginTop: '2rem' }}>
          {post.tags.split(',').map((tag, i) => (
            <span key={i} className="post-tag">{tag.trim()}</span>
          ))}
        </div>
      )}

      {/* Post Navigation */}
      <nav className="post-nav">
        {prev ? (
          <Link href={`/posts/${prev.slug}`} className="post-nav-item">
            <p className="post-nav-label">← 上一篇</p>
            <p className="post-nav-title">{prev.title}</p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/posts/${next.slug}`} className="post-nav-item">
            <p className="post-nav-label">下一篇 →</p>
            <p className="post-nav-title">{next.title}</p>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  )
}
