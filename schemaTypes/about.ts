import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'Tentang Perusahaan',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline (Kecil di Atas)',
      type: 'string',
      initialValue: 'TENTANG PERUSAHAAN'
    }),
    defineField({
      name: 'title',
      title: 'Judul Utama',
      type: 'string',
      initialValue: 'Integritas Dalam Setiap Proyek, Kualitas Dalam Setiap Detail'
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      initialValue: 'PT. Abimanyu Abadi adalah kontraktor umum dan supplier terpercaya yang telah melayani klien-klien korporat tier-1 Indonesia selama lebih dari satu dekade. Kami memahami bahwa setiap proyek adalah kombinasi unik dari tantangan teknis, kebutuhan bisnis, dan standar kualitas tertinggi.'
    }),
    defineField({
      name: 'stats',
      title: 'Statistik (Angka)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'number', title: 'Nilai Angka' },
            { name: 'suffix', type: 'string', title: 'Akhiran (Misal: +)' },
            { name: 'label', type: 'string', title: 'Keterangan' }
          ]
        }
      ],
      initialValue: [
        { value: 50, suffix: '+', label: 'Proyek Selesai' },
        { value: 15, suffix: '+', label: 'Klien Korporat' },
        { value: 10, suffix: '+', label: 'Tahun Pengalaman' }
      ]
    }),
    defineField({
      name: 'badges',
      title: 'Sertifikasi (SIUJK, SBU, dll)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Nama Singkat' },
            { name: 'description', type: 'string', title: 'Keterangan' }
          ]
        }
      ],
      initialValue: [
        { name: 'SIUJK', description: 'Jasa Konstruksi' },
        { name: 'SBU', description: 'Badan Usaha' },
        { name: 'NIB', description: 'Induk Berusaha' }
      ]
    }),
    defineField({
      name: 'videos',
      title: 'Video YouTube Shorts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Judul Video' },
            { name: 'location', type: 'string', title: 'Lokasi Proyek' },
            { name: 'videoId', type: 'string', title: 'YouTube Video ID' }
          ]
        }
      ],
      initialValue: [
        { title: 'High-Rise Construction', location: 'Jakarta Project', videoId: 'iGCH44aqfcE' },
        { title: 'Industrial Development', location: 'Surabaya Site', videoId: 'MNg6fr2iKX0' }
      ]
    })
  ]
})
