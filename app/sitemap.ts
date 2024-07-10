export default async function sitemap() {
  let routes = ["", "/blog", "/guestbook", "/work"].map((route) => ({
    url: `https://joeduchnowski.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
