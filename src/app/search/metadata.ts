import type { Metadata } from "next"

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Advanced Search | Waja Journal of Anthropology & Archaeology",
  description:
    "Use the advanced search tool to explore all Waja Journal volumes, articles, editors, and research topics in anthropology and archaeology.",
  keywords: [
    "Waja Journal",
    "Search Journal",
    "Anthropology Research",
    "Archaeology Research",
    "Academic Search",
    "Nigeria",
    "Scholarly Articles",
  ],
  openGraph: {
    title: "Advanced Search | Waja Journal",
    description:
      "Explore Waja Journal volumes, articles, and research topics using advanced filters and search tools.",
    url: "https://waja-inventory.vercel.app/search",
    siteName: "Waja Journal",
    images: [
      {
        url: "https://waja-inventory.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Waja Journal Advanced Search",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Search | Waja Journal",
    description:
      "Search through anthropology and archaeology research articles, editors, and topics in the Waja Journal.",
    images: ["https://waja-inventory.vercel.app/og-image.png"],
  },
}