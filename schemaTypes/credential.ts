import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'credential',
  title: 'Kredensial/Sertifikat',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Nilai/Angka',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Urutan',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
  ],
})
