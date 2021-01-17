const title = 'Tailwind para Designers';
const description = 'Guia geral do framework para designers, em português.';

const SEO = {
  title,
  description,
  canonical: 'https://daniloleal.co',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://daniloleal.co',
    title,
    description,
    images: [
      {
        url: 'https://i.ibb.co/gZXxYP2/banner.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@danilobontempo',
    site: '@danilobontempo',
    cardType: 'summary_large_image',
  },
};

export default SEO;
