import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'client',
  title: 'Klien',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Klien',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'order',
      title: 'Urutan',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
  ],
})
