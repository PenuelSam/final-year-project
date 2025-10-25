import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Search, Users } from "lucide-react"
import { fetchVolumes, selectFeaturedVolumes, selectLatestVolumes } from "@/lib/data"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Waja Journal | Department of Anthropology & Archaeology",
  description:
    "Explore the Waja Journal – a scholarly publication from the Department of Anthropology & Archaeology, featuring volumes of research, cultural insights, and archaeological discoveries.",
  keywords: [
    "Waja Journal",
    "Anthropology",
    "Archaeology",
    "Research",
    "Nigeria",
    "Academic Journal",
    "Human culture",
  ],
  openGraph: {
    title: "Waja Journal | Department of Anthropology & Archaeology",
    description:
      "Access decades of anthropological and archaeological research through the Waja Journal volumes.",
    url: "https://waja-inventory.vercel.app",
    siteName: "Waja Journal",
    images: [
      {
        url: "https://waja-inventory.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Waja Journal Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waja Journal | Department of Anthropology & Archaeology",
    description:
      "Explore the Waja Journal – decades of anthropological and archaeological scholarship.",
    images: ["https://waja-inventory.vercel.app/og-image.png"],
  },
}

export default async function HomePage() {
  const volumes = await fetchVolumes()
  const latestVolumes = selectLatestVolumes(volumes, 3)
  const featuredVolumes = selectFeaturedVolumes(volumes, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Waja Journal
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-slate-200">
              Advancing Knowledge in Anthropology & Archaeology
            </p>
            <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
              Explore 42 volumes of cutting-edge research, cultural insights,
              and archaeological discoveries from the Department of
              Anthropology & Archaeology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/volumes">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Volumes
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-black hover:bg-white hover:text-slate-900"
              >
                <Link href="/search">
                  <Search className="mr-2 h-5 w-5" />
                  Search Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">42</div>
              <div className="text-slate-600">Journal Volumes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Research Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-slate-600">Years of Publication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Volumes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Volumes</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover our most recent publications featuring groundbreaking
              research and discoveries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {latestVolumes.map((volume) => (
              <Card key={volume.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">Volume {volume.number}</Badge>
                    <span className="text-sm text-slate-500">{volume.year}</span>
                  </div>
                  <CardTitle className="text-lg">{volume.title}</CardTitle>
                  <CardDescription>{volume.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">
                      {volume.articles} articles
                    </span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/volumes/${volume.slug}`}>View Volume</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/volumes">View All Volumes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Volumes */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Research</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Highlighted volumes showcasing exceptional contributions to
              anthropological and archaeological knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredVolumes.map((volume) => (
              <Card key={volume.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-amber-100 text-amber-800">Featured</Badge>
                    <span className="text-sm text-slate-500">{volume.year}</span>
                  </div>
                  <CardTitle className="text-lg">{volume.title}</CardTitle>
                  <CardDescription>{volume.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">
                      Volume {volume.number}
                    </span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/volumes/${volume.slug}`}>Explore</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Department of Anthropology & Archaeology
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our department is dedicated to advancing understanding of human
              culture, society, and history through rigorous research and
              scholarly publication. The Waja Journal serves as a premier
              platform for disseminating cutting-edge research in
              anthropological and archaeological studies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Dive into decades of anthropological and archaeological research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/volumes">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse All Volumes
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-600"
            >
              <Link href="/search">
                <Search className="mr-2 h-5 w-5" />
                Advanced Search
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
