// sanity.config.ts
import {defineConfig} from "sanity";
import {visionTool} from "@sanity/vision";
import {presentationTool} from "sanity/presentation";
import {schemaTypes} from "./schemas";
import { locations, mainDocuments } from "./lib/presentation/resolve";
import { codeInput } from "@sanity/code-input";
import { structureTool } from "sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "default",
  title: "Indresh Studio",
  projectId,
  dataset,
  basePath: "/studio",
    plugins: [
    structureTool(), 
    visionTool(),
    presentationTool({ resolve: { locations, mainDocuments }, previewUrl: { initial: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000" } }),
    codeInput(), 
  ],
  schema: { types: schemaTypes },
});
