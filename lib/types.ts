import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageObject } from "@sanity/image-url/lib/types/types";

export type PostDoc = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  excerpt?: string;
  coverImage?: (SanityImageObject & { alt?: string; caption?: string }) | null;
  content: PortableTextBlock[]; // <-- important
};
