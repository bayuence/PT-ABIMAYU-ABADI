import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Konten Website')
    .items([
      S.documentTypeListItem('heroSlide').title('Hero Slide'),
      S.documentTypeListItem('service').title('Layanan'),
      S.documentTypeListItem('portfolio').title('Portofolio Proyek'),
      S.documentTypeListItem('client').title('Klien'),
      S.documentTypeListItem('credential').title('Kredensial/Sertifikat'),
      S.divider(),
      // Singletons
      S.listItem()
        .title('Tentang Perusahaan')
        .id('about')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Informasi Kontak')
        .id('contactInfo')
        .child(
          S.document()
            .schemaType('contactInfo')
            .documentId('contactInfo')
        ),
      S.listItem()
        .title('Pengaturan Footer')
        .id('footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
        ),
    ])
