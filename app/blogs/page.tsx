import { client } from "@/lib/sanity.client";
import { postsListQuery } from "@/lib/sanity.queries";
import PostCard from "../components/BlogCard";

export const revalidate = 60; // ISR

export default async function EngineeringIndex() {
  const posts = await client.fetch(postsListQuery);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <section className="grid gap-4">
        {posts?.length
          ? posts.map((p: any) => <PostCard key={p._id} item={p} />)
          : <p className="text-zinc-500">No posts yet.</p>}
      </section>
    </main>
  );
}
