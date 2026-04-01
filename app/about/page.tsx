import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我 | About | 盛一伟',
  description: '了解盛一伟的商品驱动型运营专家背景与理念',
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="page-header" style={{ paddingBottom: '2rem' }}>
        <div className="header-content">
          <p className="header-tag">About Me</p>
          <h1 className="header-title">关于我</h1>
        </div>
      </section>

      <div className="about-content">
        {/* Introduction */}
        <section className="about-section">
          <h2>我是谁</h2>
          <p>
            盛一伟，商品驱动型运营专家，在电商行业深耕超过15年。专注于通过数据驱动的方法，
            将商品力与运营策略深度融合，帮助品牌实现可持续增长。
          </p>
          <p>
            曾任职于安奈儿、361度、七格格等知名品牌，负责商品运营体系建设、
            供应链优化及全渠道运营策略制定。
          </p>
        </section>

        {/* Expertise */}
        <section className="about-section">
          <h2>专业领域</h2>
          <p>商品策略规划 · 供应链管理 · 全渠道运营 · 数据驱动决策 · 品牌增长</p>
        </section>

        {/* Philosophy */}
        <section className="about-section">
          <h2>核心理念</h2>
          <p>
            "好的运营，是让商品自己说话。"
          </p>
          <p>
            我相信，真正的商品驱动型运营，不是靠流量堆积，而是通过深入理解消费者需求，
            搭配精准的商品结构和完善的供应链体系，让优质商品能够高效地触达目标用户。
          </p>
        </section>

        {/* Contact */}
        <section className="about-section">
          <h2>联系我</h2>
          <p>
            如果你对商业洞察、电商运营或职业发展有交流兴趣，欢迎通过以下方式联系：
          </p>
          <p style={{ color: 'var(--accent)' }}>
            商务合作 · 行业交流 · 职业咨询
          </p>
        </section>
      </div>
    </div>
  )
}
