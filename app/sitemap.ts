import { getBlogPosts } from "./db/blog";

export default async function sitemap() {
  let routes = ["", "/blog", "/work"].map((route) => ({
    url: `https://joeduchnowski.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  let blogs = getBlogPosts().map((post) => ({
    url: `https://joeduchnowski.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  return [...routes, ...blogs];
}
