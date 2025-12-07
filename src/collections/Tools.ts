import type { CollectionConfig } from 'payload'

export const Tools: CollectionConfig = {
  slug: 'tools',
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
        required: false,
        label: 'Description'
    },
    {
        type: 'text',
        name: 'link',
        label: 'Link',
        required: false,
    }
  ],
}