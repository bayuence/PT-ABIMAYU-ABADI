import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Pengaturan Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Nama Brand',
      type: 'string',
      initialValue: 'PT. ABIMANYU ABADI',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline Brand',
      type: 'string',
      initialValue: 'General Contractor',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
      initialValue: 'Membangun dengan Integritas — kontraktor umum dan supplier terpercaya untuk kebutuhan konstruksi korporat Indonesia.',
    }),
    defineField({
      name: 'copyright',
      title: 'Teks Copyright',
      type: 'string',
      initialValue: '© 2025 PT. Abimanyu Abadi. All rights reserved.',
    }),
    defineField({
      name: 'footerInfo',
      title: 'Info Footer (Bawah Kanan)',
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
