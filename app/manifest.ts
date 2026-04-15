import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prashant Kushwaha — Senior Software Engineer",
    short_name: "Prashant Kushwaha",
    description:
      "Senior Software Engineer (SDE-2) at Atlassian. Ex-Blinkit, Razorpay. Open to contract & full-time.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#06070A",
    theme_color: "#06070A",
    orientation: "portrait",
    icons: [
      {
        src: "/portrait.jpg",
        sizes: "any",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
