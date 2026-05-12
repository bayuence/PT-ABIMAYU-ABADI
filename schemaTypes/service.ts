import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Layanan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Layanan',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Lucide',
      type: 'string',
      description: 'Nama icon dari lucide-react, contoh: Hammer, Wrench, Briefcase',
    }),
    defineField({
      name: 'order',
      title: 'Urutan',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
  ],
})
