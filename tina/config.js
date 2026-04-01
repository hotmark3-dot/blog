import { defineConfig } from 'tinacms'

const config = defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: '文章 Posts',
        path: 'content/posts',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: '标题 Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'subtitle',
            label: '副标题 Subtitle',
          },
          {
            type: 'string',
            name: 'excerpt',
            label: '摘要 Excerpt',
          },
          {
            type: 'datetime',
            name: 'date',
            label: '发布日期 Date',
          },
          {
            type: 'string',
            name: 'category',
            label: '分类 Category',
            options: [
              { value: '随笔', label: '随笔' },
              { value: '商业洞察', label: '商业洞察' },
            ],
          },
          {
            type: 'string',
            name: 'tags',
            label: '标签 Tags',
            description: '用逗号分隔多个标签',
          },
          {
            type: 'string',
            name: 'coverImage',
            label: '封面图片 Cover Image',
            description: '输入图片 URL 或从媒体库选择',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: '草稿 Draft',
            description: '勾选则为草稿，不会公开发布',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: '内容 Content',
            isBody: true,
            templates: [],
            parser: 'markdown',
          },
        ],
      },
    ],
  },
})

export default config
