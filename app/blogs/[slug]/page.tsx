import { client } from "@/lib/sanity.client";
import { allSlugsQuery, postBySlugQuery } from "@/lib/sanity.queries";
import type { PostDoc } from "@/lib/types";
import PortableRenderer from "@/app/components/PortableRenderer";
import { fmtDate } from "@/lib/utils";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(allSlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch<PostDoc | null>(postBySlugQuery, { slug: params.slug });
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="mt-2 text-sm text-zinc-500">{fmtDate(post.publishedAt)}</div>
        {post.coverImage && (
          <div className="mt-6">
            <Image
              src={urlFor(post.coverImage).width(1600).height(900).url()}
              alt={post.coverImage.alt ?? ""}
              width={1600}
              height={900}
              className="w-full h-auto rounded-2xl"
            />
            {post.coverImage.caption && (
              <div className="mt-2 text-sm text-zinc-500">{post.coverImage.caption}</div>
            )}
          </div>
        )}
      </header>

        <div className="prose prose-zinc max-w-none"> 
        <PortableRenderer value={post.content} />
      </div>
    </article>
  );
}
