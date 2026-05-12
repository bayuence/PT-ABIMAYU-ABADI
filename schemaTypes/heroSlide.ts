import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag/Label',
      type: 'string',
    }),
    defineField({
      name: 'youtubeVideoId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'Hanya ID video, contoh: dQw4w9WgXcQ',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Durasi Tampil (ms)',
      type: 'number',
      description: 'Berapa lama slide ditampilkan dalam milidetik (default: 5000)',
    }),
    defineField({
      name: 'order',
      title: 'Urutan',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
  ],
})
