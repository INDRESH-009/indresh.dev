// app/blogs/[slug]/page.tsx
import { readClient } from "@/lib/sanity.client";
import { allSlugsQuery, postBySlugQuery } from "@/lib/sanity.queries";
import type { PostDoc } from "@/lib/types";
import PortableRenderer from "@/app/components/PortableRenderer";
import { fmtDate } from "@/lib/utils";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await readClient.fetch(allSlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;            // 👈 await the promise

  const post = await readClient.fetch<PostDoc | null>(postBySlugQuery, { slug });
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-30">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="mt-2 text-sm text-zinc-500">{fmtDate(post.publishedAt)}</div>
        {post.coverImage && (
          <div className="mt-6">
            <Image
              src={urlFor(post.coverImage).width(1200).format("webp").quality(80).url()}
              alt={post.coverImage.alt ?? ""}
              width={1200}
              height={630}
              className="w-full h-auto rounded-2xl"
              priority
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

// (optional) if you added SEO metadata for posts:
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await readClient.fetch<PostDoc | null>(postBySlugQuery, { slug });
  if (!post) return {};
  const title = `${post.title} — Indresh`;
  const description = post.excerpt ?? "Blog by Indresh";
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}
