// lib/presentation/resolve.ts
import {defineDocuments, defineLocations} from "sanity/presentation";

export const locations = {
  post: defineLocations({
    select: { title: "title", slug: "slug.current" } as const,
    resolve: (doc) => {
      if (!doc?.slug) {
        // only index link while editing untitled/unslugged docs
        return { locations: [{ title: "Engineering Index", href: "/blogs" }] };
      }
      return {
        locations: [
          { title: doc.title ?? "Untitled", href: `/blogs/${doc.slug}` },
          { title: "Engineering Index", href: "/blogs" },
        ],
      };
    },
  }),
};

export const mainDocuments = defineDocuments([
  { route: "/blogs/:slug", filter: `_type == "post" && slug.current == $slug` },
]);
