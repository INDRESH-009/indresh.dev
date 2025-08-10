import { groq } from "next-sanity";

// minimal fields for lists
export const postsListQuery = groq`
*[_type=="post" && defined(slug.current)]
| order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  coverImage,
  // derive plain text for index preview when excerpt missing
  "preview": coalesce(excerpt, pt::text(content)[0..220])
}
`;

export const postBySlugQuery = groq`
*[_type=="post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  coverImage,
  content
}
`;

export const allSlugsQuery = groq`
*[_type=="post" && defined(slug.current)][]{
  "slug": slug.current
}
`;
