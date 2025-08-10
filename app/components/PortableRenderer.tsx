// components/PortableRenderer.tsx
"use client";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import React from "react";
import RichImage from "./RichImage";

function renderEmbed(url?: string) {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace("www.", "");
    if (host.includes("youtube.com") || host === "youtu.be") {
      const id = u.searchParams.get("v") || u.pathname.slice(1);
      return (
        <div className="my-6 aspect-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title="YouTube embed"
            className="w-full h-full rounded-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return <iframe src={url} className="my-6 w-full min-h-[420px] rounded-xl" />;
  } catch {
    return null;
  }
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => <RichImage value={value} />,
    figure: ({ value }) => <RichImage value={value} />,
    callout: ({ value }) => (
      <div
        className={`my-4 rounded-xl p-4 ${
          value.tone === "success"
            ? "bg-emerald-50 border border-emerald-200"
            : value.tone === "warn"
            ? "bg-amber-50 border border-amber-200"
            : "bg-sky-50 border border-sky-200"
        }`}
      >
        <p className="text-sm leading-6">{value.body}</p>
      </div>
    ),
    code: ({ value }) => (
      <pre className="my-6 overflow-x-auto rounded-xl bg-zinc-950 text-zinc-50 p-4 text-sm">
        {value.filename && (
          <div className="mb-2 text-xs text-zinc-400">{value.filename}</div>
        )}
        <code>{value.code}</code>
      </pre>
    ),
    embed: ({ value }) => renderEmbed(value?.url),
  },
  block: {
    h2: ({ children }) => <h2 className="mt-10 mb-4 text-2xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 mb-3 text-xl font-semibold">{children}</h3>,
    normal: ({ children }) => <p className="my-4 leading-7">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 pl-4 italic text-zinc-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    code: ({ children }) => (
      <code className="rounded bg-zinc-100 px-1 py-0.5 text-[0.9em]">{children}</code>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="my-4 ml-6 list-disc space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="my-4 ml-6 list-decimal space-y-1">{children}</ol>,
  },
};

export default function PortableRenderer({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}