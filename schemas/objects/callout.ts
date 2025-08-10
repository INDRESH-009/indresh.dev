import { defineField, defineType } from "sanity";

export default defineType({
  name: "callout",
  title: "Callout",
  type: "object",
  fields: [
    defineField({
      name: "tone",
      type: "string",
      options: { list: ["info", "success", "warn"] },
      initialValue: "info",
    }),
    defineField({ name: "body", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "tone", subtitle: "body" } },
});
