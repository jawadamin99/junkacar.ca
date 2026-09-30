import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Junk A Car", short_name: "Junk A Car", description: "Cash for junk cars in Calgary with free towing and payment at pickup.", start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#0759d9", icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }] };
}
