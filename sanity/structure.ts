import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Konten Website')
    .items([
      // Tampilkan semua dokumen kecuali singleton
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['about', 'contactInfo', 'footer'].includes(listItem.getId() || '')
      ),
      S.divider(),
      // Tampilkan singleton sebagai item tunggal
      S.listItem()
        .title('Tentang Perusahaan')
        .id('about-singleton')
        .child(S.document().schemaType('about').documentId('about')),
      S.listItem()
        .title('Informasi Kontak')
        .id('contact-singleton')
        .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
      S.listItem()
        .title('Pengaturan Footer')
        .id('footer-singleton')
        .child(S.document().schemaType('footer').documentId('footer')),
    ])
