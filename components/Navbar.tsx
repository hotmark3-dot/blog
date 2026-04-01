'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">
        盛一伟
        <span className="logo-en">Sheng Yiwei</span>
      </Link>
      <div className="nav-links">
        <Link href="/" className={`nav-link ${isActive('/') && pathname === '/' ? 'active' : ''}`}>
          首页 <span className="link-en">Home</span>
        </Link>
        <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
          关于 <span className="link-en">About</span>
        </Link>
        <Link
          href="/admin"
          className="nav-link"
          target="_blank"
          style={{ color: 'var(--accent)' }}
        >
          管理 <span className="link-en">Admin</span>
        </Link>
      </div>
    </nav>
  )
}
