import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

// Load Inter font
const inter = Inter({ subsets: ["latin"], display: "swap" })

//  Global SEO metadata (applies site-wide)
export const metadata: Metadata = {
  title: {
    default: "Waja Journal of Anthropology & Archaeology",
    template: "%s | Waja Journal",
  },
  description:
    "Official digital inventory of the Waja Journal of Anthropology & Archaeology — a comprehensive collection of research volumes, articles, and academic findings.",
  keywords: [
    "Waja Journal",
    "Anthropology",
    "Archaeology",
    "Academic Research",
    "Nigeria",
    "Scholarly Journal",
    "Cultural Studies",
    "University Publication",
  ],
  metadataBase: new URL("https://waja-inventory.vercel.app"),
  alternates: {
    canonical: "https://waja-inventory.vercel.app",
  },
  openGraph: {
    title: "Waja Journal of Anthropology & Archaeology",
    description:
      "Explore research volumes and academic contributions in anthropology and archaeology from the Waja Journal.",
    url: "https://waja-inventory.vercel.app",
    siteName: "Waja Journal",
    images: [
      {
        url: "https://waja-inventory.vercel.app/og-default.png",
        width: 1200,
        height: 630,
        alt: "Waja Journal Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waja Journal of Anthropology & Archaeology",
    description:
      "Official digital repository of the Waja Journal — advancing anthropological and archaeological scholarship.",
    images: ["https://waja-inventory.vercel.app/og-default.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.pgn",
    apple: "/og-image.png",
  },
  themeColor: "#ffffff",
  authors: [{ name: "Department of Anthropology & Archaeology, Waja University" }],
  creator: "Waja Journal Editorial Team",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-slate-50 text-slate-900 antialiased",
          inter.className,
        )}
      >
       

        {/*  Main Content */}
        <main className="flex-1">{children}</main>

       
      </body>
    </html>
  )
}
