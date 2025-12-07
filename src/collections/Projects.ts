import type { CollectionConfig } from 'payload'
export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
        type: 'text',
        name: 'title',
        required: true,
        label: 'Title'
    },
    {
        type: 'textarea',
        name: 'text',
        required: true,
        label: 'Description'
    },
    {
        type: 'date',
        name: 'date',
        required: true,
        label: 'Date'
    },
    {
        type: 'relationship',
        name: 'tags',
        relationTo: 'tags',
        hasMany: true,
        required: false,
        label: 'Tags'
    },
    {
        type: 'relationship',
        name: 'tools',
        relationTo: 'tools',
        hasMany: true,
        required: false,
        label: 'Tools'
    },
    {
        type: 'select',
        name: 'type',
        options: ['work', 'experiment'],
        label: 'Type',
        required: true
    },
    // {
    //     type: 'blocks',
    //     name: 'content',
    //     label: 'Content',
    //     blocks: []
    // },
    {
        type: 'upload',
        name: 'image',
        relationTo: 'media',
        label: 'Key visual image',
        required: false
    },
    {
        type: 'upload',
        name: 'gallery',
        relationTo: 'media',
        label: 'Gallery',
        required: false,
        hasMany: true
    },
    {
        type: 'text',
        name: 'link',
        label: 'Link',
        required: false
    },
    {
        type: 'text',
        name: 'github',
        label: 'Github Link',
        required: false
    },
    {
        type: 'relationship',
        name: 'video',
        relationTo: 'media',
        label: 'Video',
        required: false
    }
  ],
}
