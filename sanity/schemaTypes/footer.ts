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
      name: 'socialLinks',
      title: 'Media Sosial (Bisa Tambah Sendiri)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'platform', 
              title: 'Platform', 
              type: 'string', 
              options: { 
                list: [
                  { title: 'Facebook', value: 'Facebook' },
                  { title: 'Instagram', value: 'Instagram' },
                  { title: 'LinkedIn', value: 'LinkedIn' },
                  { title: 'Twitter', value: 'Twitter' },
                  { title: 'TikTok', value: 'TikTok' },
                  { title: 'YouTube', value: 'YouTube' },
                  { title: 'WhatsApp', value: 'WhatsApp' },
                  { title: 'Email', value: 'Email' },
                ] 
              } 
            },
            { name: 'url', title: 'URL / Link', type: 'url' }
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'quickLinks',
      title: 'Link Perusahaan (Bisa Tambah/Ubah)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Nama Link', type: 'string' },
            { name: 'href', title: 'Tujuan (Contoh: #about atau https://google.com)', type: 'string' }
          ]
        }
      ]
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
  ],
})
