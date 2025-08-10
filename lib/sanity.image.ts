// lib/sanity.image.ts
import imageUrlBuilder from "@sanity/image-url";
import type {
  SanityImageSource,
  SanityImageObject,
} from "@sanity/image-url/lib/types/types"; // <- correct type import
import { client } from "./sanity.client";

const builder = imageUrlBuilder(client);

export const urlFor = (src: SanityImageSource) => builder.image(src);

// If you pass optional images sometimes:
export const urlForOptional = (src?: SanityImageSource | null) =>
  src ? builder.image(src) : undefined;

export type { SanityImageObject, SanityImageSource };
