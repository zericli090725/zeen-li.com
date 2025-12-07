import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
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
        name: 'color',
        label: 'Color',
        required: true,
        defaultValue: '#fff'
    }
  ],
}