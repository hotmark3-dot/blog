'use client'

import { TinaCMSProvider2 } from 'tinacms'

const schema = {
  collections: [
    {
      name: 'post',
      label: '文章 Posts',
      path: 'content/posts',
      format: 'md',
      fields: [
        { type: 'string', name: 'title', label: '标题', isTitle: true, required: true },
        { type: 'string', name: 'subtitle', label: '副标题' },
        { type: 'string', name: 'excerpt', label: '摘要' },
        { type: 'datetime', name: 'date', label: '发布日期' },
        {
          type: 'string',
          name: 'category',
          label: '分类',
          options: ['随笔', '商业洞察'],
        },
        { type: 'string', name: 'tags', label: '标签' },
        { type: 'string', name: 'coverImage', label: '封面图片' },
        { type: 'boolean', name: 'draft', label: '草稿' },
        { type: 'rich-text', name: 'body', label: '内容', isBody: true },
      ],
    },
  ],
}

export function TinaWrapper({ children }: { children: React.ReactNode }) {
  return (
    <TinaCMSProvider2
      schema={schema}
      client={{ apiUrl: 'http://localhost:4001/graphql' }}
      tinaGraphQLVersion="v2"
      branch={process.env.NEXT_PUBLIC_TINA_BRANCH || 'main'}
      clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
    >
      {children}
    </TinaCMSProvider2>
  )
}
