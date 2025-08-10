import { defineField, defineType } from "sanity";

export default defineType({
  name: "figure",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({ name: "alt", type: "string" }),
    defineField({ name: "caption", type: "string" }),
    defineField({
      name: "width",
      title: "Width (%)",
      type: "number",
      initialValue: 100,
      validation: r => r.min(10).max(100),
    }),
    defineField({
      name: "align",
      type: "string",
      options: { list: ["left", "center", "right"] },
      initialValue: "center",
    }),
  ],
});
