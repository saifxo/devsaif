import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./src/sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  //  projectId :"j06sgl5p",
//  dataset :'production',
 apiVersion :process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  title: "Portfolio Website",
  // apiVersion: process.env.NEXT_PUBLIC_SANITY_PROJECT_API_VERSION as string,
  basePath: "/admin",
  plugins: isDev ? [structureTool(), visionTool()] : [structureTool()],
  schema: { types: schemas },
});

export default config;
