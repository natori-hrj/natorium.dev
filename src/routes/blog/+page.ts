export async function load() {
  const postFiles = import.meta.glob('./posts/*.md');
  const posts = [];

  for (const path in postFiles) {
    const post = await postFiles[path]();
    const slug = path.replace('./posts/', '').replace('.md', '');

    posts.push({
      slug,
      title: post.metadata.title,
      date: post.metadata.date,
      description: post.metadata.description,
      tags: post.metadata.tags || [],
      published: post.metadata.published !== false
    });
  }

  // 公開済みの記事のみフィルタリングし、日付順にソート
  const publishedPosts = posts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    posts: publishedPosts
  };
}
