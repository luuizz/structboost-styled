export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://strucboost-styled.vercel.app/sitemap.xml',
    }
  }