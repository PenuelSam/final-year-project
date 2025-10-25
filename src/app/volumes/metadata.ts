import type { Metadata } from "next"
// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "All Journal Volumes | Waja Journal of Anthropology & Archaeology",
  description:
    "Browse all Waja Journal volumes featuring decades of research in anthropology, archaeology, and cultural studies.",
  keywords: [
    "Waja Journal",
    "Journal Volumes",
    "Anthropology",
    "Archaeology",
    "Nigeria",
    "Academic Research",
    "Waja University",
    "Cultural Studies",
  ],
  openGraph: {
    title: "All Journal Volumes | Waja Journal",
    description:
      "Explore all published volumes of the Waja Journal. Access research, findings, and academic papers in anthropology and archaeology.",
    url: "https://waja-inventory.vercel.app/volumes",
    siteName: "Waja Journal",
    images: [
      {
        url: "https://waja-inventory.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Waja Journal Volumes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Journal Volumes | Waja Journal",
    description:
      "Browse decades of anthropological and archaeological research in the Waja Journal.",
    images: ["https://waja-inventory.vercel.app/og-image.png"],
  },
}