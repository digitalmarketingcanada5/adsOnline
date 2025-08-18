import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', 'status', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the title',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Brief summary for blog cards and SEO',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Main image displayed in blog cards and post header',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'readTime',
      type: 'number',
      admin: {
        description: 'Estimated reading time in minutes',
      },
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          admin: {
            description: 'Custom meta title (if different from post title)',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          admin: {
            description: 'Custom meta description for SEO',
          },
        },
        {
          name: 'metaImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Custom social sharing image',
          },
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        description: 'When the post was published (auto-filled on first publish)',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' || operation === 'update') {
          // Auto-set publishedAt when publishing for the first time
          if (data._status === 'published' && !data.publishedAt) {
            data.publishedAt = new Date()
          }
          
          // Auto-calculate read time if not set
          if (!data.readTime && data.content) {
            // Rough calculation: 200 words per minute
            const wordCount = data.content.toString().split(' ').length
            data.readTime = Math.ceil(wordCount / 200)
          }
        }
        return data
      },
    ],
  },
  access: {
    read: ({ req: { user } }) => {
      // If user is logged in, they can read all posts including drafts
      if (user) {
        return true
      }
      
      // Public users can only read published posts
      return {
        _status: {
          equals: 'published',
        },
      }
    },
    create: ({ req: { user } }) => {
      // Only authenticated users can create posts
      return Boolean(user)
    },
    update: ({ req: { user } }) => {
      // Only authenticated users can update posts
      return Boolean(user)
    },
    delete: ({ req: { user } }) => {
      // Only admins can delete posts
      return user?.role === 'admin'
    },
  },
}