// app/blogs/page.tsx
import { readClient } from "@/lib/sanity.client";
import { postsListQuery } from "@/lib/sanity.queries";
import PostCard from "../components/BlogCard";
import type { SanityImageObject } from "@sanity/image-url/lib/types/types";

type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  preview?: string;
  coverImage?: SanityImageObject | null;
};

export const revalidate = 60;

export default async function BlogsIndex() {
  const posts = await readClient.fetch<PostListItem[]>(postsListQuery);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <section className="grid gap-4">
        {posts.length ? posts.map((p) => <PostCard key={p._id} item={p} />)
                      : <p className="text-zinc-500">No posts yet.</p>}
      </section>
    </main>
  );
}
