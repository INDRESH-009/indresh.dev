// lib/sanity.client.ts
import { createClient } from "next-sanity";

const projectId  = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset    = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

// Use this in your Next.js pages/components for fast, cached reads
export const readClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production", // CDN in prod
  perspective: "published",
});

// Use this when you need drafts / non-cached reads (optional)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
