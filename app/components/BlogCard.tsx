import Link from "next/link";
import { fmtDate, twoLine } from "@/lib/utils";

type Item = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  preview?: string;
};

export default function PostCard({ item }: { item: Item }) {
  return (
    <article className="rounded-2xl border p-5 hover:shadow-sm transition">
      <Link href={`/blogs/${item.slug}`}>
        <h3 className="text-lg font-semibold hover:underline">{item.title}</h3>
      </Link>
      <div className="mt-1 text-sm text-zinc-500">{fmtDate(item.publishedAt)}</div>
      <p className="mt-3 text-sm text-zinc-700 line-clamp-2">
        {twoLine(item.preview)}
      </p>
    </article>
  );
}
