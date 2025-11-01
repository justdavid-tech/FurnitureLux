import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Replace with your own values
export const client = createClient({
  projectId: "nkbshlk6", // 🔹 find this in sanity.config.js
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
