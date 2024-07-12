import { getBlogPosts } from "./db/blog";

export default async function sitemap() {
  let routes = ["", "/blog", "/work"].map((route) => ({
    url: `https://joebiz.dev${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  let blogs = getBlogPosts().map((post) => ({
    url: `https://joebiz.dev/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  return [...routes, ...blogs];
}
