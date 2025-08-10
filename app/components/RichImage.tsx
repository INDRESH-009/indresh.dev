// components/RichImage.tsx
"use client";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";
import type { SanityImageObject } from "@/lib/sanity.image";

type Props = {
  value: SanityImageObject & {
    alt?: string;
    caption?: string;
    width?: number; // 10..100
    align?: "left" | "center" | "right";
  };
};

export default function RichImage({ value }: Props) {
  const w = Math.min(Math.max(value.width ?? 100, 10), 100);
  const align = value.align ?? "center";
  const alignClass =
    align === "left" ? "mr-auto" : align === "right" ? "ml-auto" : "mx-auto";

  const src = urlFor(value).width(1600).url();

  return (
    <figure className={`my-6 ${alignClass}`} style={{ width: `${w}%` }}>
      <Image
        src={src}
        alt={value.alt ?? ""}
        width={1600}
        height={900}
        className="rounded-xl shadow-sm w-full h-auto"
      />
      {value.caption && (
        <figcaption className="mt-2 text-sm text-zinc-500">{value.caption}</figcaption>
      )}
    </figure>
  );
}
