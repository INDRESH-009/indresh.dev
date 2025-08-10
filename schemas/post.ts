import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: r => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "excerpt",
      description: "Optional short summary used on list and SEO.",
      type: "text",
      rows: 3,
    }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "coverImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string" },
        { name: "caption", type: "string" },
      ],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },          // paragraphs, headings, lists…
        { type: "figure" },         // image with width/align/caption
        { type: "callout" },        // info/warn/success blocks
        {
          type: "code",
          options: { withFilename: true, language: "tsx" },
        },
        { type: "embed" },          // media embeds (YouTube, X, Figma, Loom…)
      ],
    }),
    defineField({ name: "status", type: "string", options: { list: ["draft","published"] }, initialValue: "draft" }),
  ],
  preview: {
    select: { title: "title", media: "coverImage", subtitle: "publishedAt" },
    prepare({ title, media, subtitle }) {
      return { title, media, subtitle: subtitle ? new Date(subtitle).toDateString() : "—" };
    },
  },
  orderings: [
    { title: "Publish date, newest", name: "pubDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
});
