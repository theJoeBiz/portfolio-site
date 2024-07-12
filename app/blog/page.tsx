import Link from "next/link";

import { getBlogPosts } from "@/app/db/blog";

export const metadata = {
  title: "Blog",
  description: "Read the rantings of a lunatic.",
};

function getPostList() {
  let allBlogs = getBlogPosts();
  return allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export default function BlogPage() {
  let postList = getPostList();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">I blog</h1>
      {postList.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {`${
                new Date(post.metadata.publishedAt).toISOString().split("T")[0]
              }`}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
