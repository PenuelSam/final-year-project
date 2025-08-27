import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, ExternalLink, BookOpen, Calendar, User, Hash } from "lucide-react"
import { getVolumeBySlug, getRelatedVolumes } from "@/lib/data"

interface VolumePageProps {
  params: {
    slug: string
  }
}

export default function VolumePage({ params }: VolumePageProps) {
  const volume = getVolumeBySlug(params.slug)

  if (!volume) {
    notFound()
  }

  const relatedVolumes = getRelatedVolumes(volume.id, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/volumes">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Volumes
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Volume Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-blue-100 text-blue-800">Volume {volume.number}</Badge>
              <span className="text-slate-500">{volume.year}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{volume.title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed">{volume.summary}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Read Online
            </Button>
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Request Access
            </Button>
          </div>

          {/* Table of Contents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Table of Contents</CardTitle>
              <CardDescription>{volume.articles} articles in this volume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {volume.tableOfContents.map((article, index) => (
                  <div key={index} className="border-l-2 border-slate-200 pl-4">
                    <h4 className="font-semibold text-slate-900">{article.title}</h4>
                    <p className="text-sm text-slate-600 mb-1">by {article.author}</p>
                    <p className="text-sm text-slate-500">Pages {article.pages}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Abstract/Description */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About This Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">{volume.description}</p>
            </CardContent>
          </Card>

          {/* Citation */}
          <Card>
            <CardHeader>
              <CardTitle>Citation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm font-mono text-slate-700">
                  {volume.editor} (Ed.). ({volume.year}). <em>{volume.title}</em>. Waja Journal, Volume {volume.number}.
                  Department of Anthropology & Archaeology.
                  {volume.isbn && ` ISBN: ${volume.isbn}`}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Volume Details */}
          <Card>
            <CardHeader>
              <CardTitle>Volume Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Hash className="h-4 w-4 text-slate-500" />
                <div>
                  <div className="text-sm text-slate-500">Volume Number</div>
                  <div className="font-semibold">{volume.number}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-slate-500" />
                <div>
                  <div className="text-sm text-slate-500">Publication Year</div>
                  <div className="font-semibold">{volume.year}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-slate-500" />
                <div>
                  <div className="text-sm text-slate-500">Editor</div>
                  <div className="font-semibold">{volume.editor}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-slate-500" />
                <div>
                  <div className="text-sm text-slate-500">Articles</div>
                  <div className="font-semibold">{volume.articles}</div>
                </div>
              </div>
              {volume.isbn && (
                <div>
                  <div className="text-sm text-slate-500">ISBN</div>
                  <div className="font-semibold">{volume.isbn}</div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Topics */}
          <Card>
            <CardHeader>
              <CardTitle>Topics Covered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {volume.topics.map((topic) => (
                  <Badge key={topic} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Volumes */}
          {relatedVolumes.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Related Volumes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedVolumes.map((relatedVolume) => (
                  <div key={relatedVolume.id} className="border-b border-slate-200 last:border-0 pb-4 last:pb-0">
                    <Link href={`/volumes/${relatedVolume.slug}`} className="block hover:text-blue-600">
                      <div className="font-semibold text-sm mb-1">Volume {relatedVolume.number}</div>
                      <div className="text-sm text-slate-600 line-clamp-2">{relatedVolume.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{relatedVolume.year}</div>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
