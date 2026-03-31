const SITE_URL = 'https://natorium.dev';

const staticPages = ['', '/about', '/blog', '/projects', '/tech-stack', '/uses'];

export async function GET() {
  const postFiles = import.meta.glob('/src/routes/blog/posts/*.md');
  const posts: { slug: string; date: string }[] = [];

  for (const path in postFiles) {
    const post = (await postFiles[path]()) as { metadata: { date: string; published?: boolean } };
    if (post.metadata.published === false) continue;

    const slug = path.replace('/src/routes/blog/posts/', '').replace('.md', '');
    posts.push({ slug, date: post.metadata.date });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page}</loc>
  </url>`
  )
  .join('\n')}
${posts
  .map(
    (post) => `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
