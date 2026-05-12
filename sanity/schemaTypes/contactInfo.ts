import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phones',
      title: 'Phone Numbers',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of phone numbers',
    }),
    defineField({
      name: 'emails',
      title: 'Email Addresses',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of email addresses',
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'text',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Phone number for WhatsApp integration (with country code, e.g., 6287825167150)',
    }),
  ],
})
