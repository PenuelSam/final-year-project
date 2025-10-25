"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, BookOpen } from "lucide-react"
import { useVolumes } from "@/hooks/use-volumes"

export default function VolumesPage() {
  const { volumes: allVolumes, loading, error } = useVolumes()
  const [searchTerm, setSearchTerm] = useState("")
  const [yearFilter, setYearFilter] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const filteredAndSortedVolumes = useMemo(() => {
    const filtered = allVolumes.filter((volume) => {
      const matchesSearch =
        volume.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volume.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volume.topics.some((topic) => topic.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesYear = yearFilter === "all" || volume.year.toString() === yearFilter

      return matchesSearch && matchesYear
    })

    // Sort volumes
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.year - a.year
        case "oldest":
          return a.year - b.year
        case "volume-asc":
          return a.number - b.number
        case "volume-desc":
          return b.number - a.number
        default:
          return 0
      }
    })

    return filtered
  }, [allVolumes, searchTerm, yearFilter, sortBy])

  const uniqueYears = useMemo(
    () => [...new Set(allVolumes.map((v) => v.year))].sort((a, b) => b - a),
    [allVolumes],
  )

  const headerDescription = loading
    ? "Loading inventory..."
    : `Explore all ${allVolumes.length} volumes of the Waja Journal spanning decades of research.`

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Journal Volumes</h1>
         <p className="text-slate-600 text-lg">{headerDescription}</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search volumes, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {uniqueYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="volume-asc">Volume (Low to High)</SelectItem>
              <SelectItem value="volume-desc">Volume (High to Low)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
          <Filter className="h-4 w-4" />
          {loading ? "Loading inventory..." : `Showing ${filteredAndSortedVolumes.length} of ${allVolumes.length} volumes`}
        </div>
      </div>

      {/* Volumes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {error && !loading && (
          <div className="col-span-full text-center text-red-600 bg-red-50 border border-red-100 rounded-lg p-6">
            Unable to load inventory: {error}
          </div>
        )}
        {loading && (
          <div className="col-span-full text-center text-slate-500 py-12">Loading volumes...</div>
        )}
        {!loading && !error &&
          filteredAndSortedVolumes.map((volume) => (
            <Card key={volume.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">Volume {volume.number}</Badge>
                  <span className="text-sm text-slate-500">{volume.year}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{volume.title}</CardTitle>
                <CardDescription className="line-clamp-3">{volume.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Topics */}
                  <div className="flex flex-wrap gap-1">
                    {volume.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {volume.topics.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{volume.topics.length - 3} more
                      </Badge>
                    )}
                  </div>

                {/* Metadata */}
                  <div className="text-sm text-slate-500 space-y-1">
                    <div>{volume.articles} articles</div>
                    <div>Editor: {volume.editor}</div>
                  </div>

                {/* Actions */}
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={`/volumes/${volume.slug}`}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        View
                      </Link>
                    </Button>
                    {/* <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button> */}
                  </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {!loading && !error && filteredAndSortedVolumes.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No volumes found</h3>
          <p className="text-slate-600 mb-4">
            Try adjusting your search terms or filters to find what you&apos;re looking for.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setYearFilter("all")
              setSortBy("newest")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
