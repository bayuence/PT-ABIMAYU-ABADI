import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'credential',
  title: 'Company Credential',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., "Projects", "Clients", "Years", "Delivery %"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'e.g., "500+", "200+", "15+", "98%"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (1, 2, 3, 4...)',
    }),
  ],
})
