import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Informasi Kontak',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
    }),
    defineField({
      name: 'phones',
      title: 'Nomor Telepon',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'emails',
      title: 'Email',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'address',
      title: 'Alamat',
      type: 'text',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Nomor WhatsApp (tanpa +62)',
      type: 'string',
      description: 'Contoh: 6287825167150',
    }),
  ],
})
