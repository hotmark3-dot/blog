import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '盛一伟 | Sheng Yiwei',
  description: '商品驱动型运营专家的个人博客，分享商业洞察与生活随笔',
  keywords: '盛一伟, 电商运营, 商业洞察, 随笔, 个人博客',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
