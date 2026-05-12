import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Informasi Kontak',
  type: 'document',
  initialValue: {
    title: 'Mulai Proyek Anda Bersama Kami',
    phones: ['021-22708806', '0878-2516-7150', '0856-7135-400'],
    emails: ['ops.abimanyu@gmail.com'],
    address: 'Gd. AD Premier Lt.17 Suite 04B, Jl. TB Simatupang, Jakarta Selatan 12550',
    whatsappNumber: '6287825167150',
  },
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
    defineField({
      name: 'companyProfile',
      title: 'Download Company Profile (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
  ],
})
