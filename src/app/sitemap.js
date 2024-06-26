export default function sitemap() {
    const baseUrl = 'https://strucboost-styled.vercel.app/';

    return [
        {
          url: baseUrl,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 1,
        },
        {
          url: `${baseUrl}diferenciais`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: `${baseUrl}contato`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.5,
        },
        {
          url: `${baseUrl}galeria`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8,
        },
    ]
}