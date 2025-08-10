import { defineField, defineType } from "sanity";

export default defineType({
  name: "embed",
  title: "Embed",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "url",
      type: "url",
      validation: r => r.uri({ scheme: ["http", "https"] }),
    }),
  ],
  preview: { select: { title: "title", subtitle: "url" } },
});
