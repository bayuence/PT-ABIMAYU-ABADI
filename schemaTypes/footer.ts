import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Pengaturan Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2025 PT. Abimanyu Abadi. All rights reserved.',
    }),
    defineField({
      name: 'footerInfo',
      title: 'Footer Info Text',
      type: 'string',
      initialValue: 'General Contractor & Supplier · Jakarta, Indonesia',
    }),
    defineField({
      name: 'socials',
      title: 'Media Sosial',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' },
      ],
    }),
  ],
})
