"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, BookOpen, X } from "lucide-react"
import { useVolumes } from "@/hooks/use-volumes"
import type { Volume } from "@/lib/data"


export default function SearchPage() {
  const { volumes: allVolumes, loading, error } = useVolumes()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYears, setSelectedYears] = useState<string[]>([])
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("relevance")

  const uniqueYears = useMemo(
    () => [...new Set(allVolumes.map((v) => v.year))].sort((a, b) => b - a),
    [allVolumes],
  )

  const allTopics = useMemo(
    () => [...new Set(allVolumes.flatMap((v) => v.topics))].sort(),
    [allVolumes],
  )

  const getRelevanceScore = (volume: Volume, term: string) => {
    const lowerTerm = term.toLowerCase()
    let score = 0

    if (volume.title.toLowerCase().includes(lowerTerm)) score += 10
    if (volume.summary.toLowerCase().includes(lowerTerm)) score += 5
    if (volume.editor.toLowerCase().includes(lowerTerm)) score += 3
    volume.topics.forEach((topic: string) => {
      if (topic.toLowerCase().includes(lowerTerm)) score += 2
    })

    return score
  }

  const filteredVolumes = useMemo(() => {
    const filtered = allVolumes.filter((volume) => {
      const matchesSearch =
        !searchTerm ||
        volume.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volume.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volume.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volume.editor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volume.topics.some((topic) => topic.toLowerCase().includes(searchTerm.toLowerCase())) ||
        volume.tableOfContents.some(
          (article) =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.author.toLowerCase().includes(searchTerm.toLowerCase()),
        )

      const matchesYear = selectedYears.length === 0 || selectedYears.includes(volume.year.toString())
      const matchesTopics = selectedTopics.length === 0 || selectedTopics.some((topic) => volume.topics.includes(topic))

      return matchesSearch && matchesYear && matchesTopics
    })

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
        case "relevance":
        default:
          if (!searchTerm) return b.year - a.year
          const scoreA = getRelevanceScore(a, searchTerm)
          const scoreB = getRelevanceScore(b, searchTerm)
          return scoreB - scoreA
      }
    })

    return filtered
  }, [allVolumes, searchTerm, selectedYears, selectedTopics, sortBy])

  const headerDescription = loading
    ? "Loading inventory..."
    : "Search through all volumes, articles, and topics in the Waja Journal collection."

  const toggleYear = (year: string) => {
    setSelectedYears((prev) => (prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]))
  }

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) => (prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedYears([])
    setSelectedTopics([])
    setSortBy("relevance")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Advanced Search</h1>
        <p className="text-slate-600 text-lg">{headerDescription}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Filters</CardTitle>
                {(selectedYears.length > 0 || selectedTopics.length > 0) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Years Filter */}
              <div>
                <h4 className="font-semibold mb-3">Publication Year</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {uniqueYears.map((year) => (
                    <div key={year} className="flex items-center space-x-2">
                      <Checkbox
                        id={`year-${year}`}
                        checked={selectedYears.includes(year.toString())}
                        onCheckedChange={() => toggleYear(year.toString())}
                      />
                      <label htmlFor={`year-${year}`} className="text-sm cursor-pointer">
                        {year}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topics Filter */}
              <div>
                <h4 className="font-semibold mb-3">Topics</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allTopics.map((topic) => (
                    <div key={topic} className="flex items-center space-x-2">
                      <Checkbox
                        id={`topic-${topic}`}
                        checked={selectedTopics.includes(topic)}
                        onCheckedChange={() => toggleTopic(topic)}
                      />
                      <label htmlFor={`topic-${topic}`} className="text-sm cursor-pointer">
                        {topic}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Results */}
        <div className="lg:col-span-3">
          {/* Search Bar and Sort */}
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search volumes, articles, authors, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="volume-asc">Volume (Low to High)</SelectItem>
                  <SelectItem value="volume-desc">Volume (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {(selectedYears.length > 0 || selectedTopics.length > 0) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedYears.map((year) => (
                  <Badge key={year} variant="secondary" className="cursor-pointer" onClick={() => toggleYear(year)}>
                    {year} <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
                {selectedTopics.map((topic) => (
                  <Badge key={topic} variant="secondary" className="cursor-pointer" onClick={() => toggleTopic(topic)}>
                    {topic} <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
              </div>
            )}

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <Filter className="h-4 w-4" />
              {loading
                ? "Loading inventory..."
                : `${filteredVolumes.length} result${filteredVolumes.length !== 1 ? "s" : ""} found`}
            </div>
          </div>

          {error && !loading && (
            <div className="text-red-600 bg-red-50 border border-red-100 rounded-lg p-6 mb-6">
              Unable to load inventory: {error}
            </div>
          )}

          {loading && <div className="text-center text-slate-500 py-12">Loading search index...</div>}

          {!loading && !error && (
            <div className="space-y-6">
              {filteredVolumes.map((volume) => (
                <Card key={volume.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">Volume {volume.number}</Badge>
                      <span className="text-sm text-slate-500">{volume.year}</span>
                    </div>
                    <CardTitle className="text-xl">
                      <Link href={`/volumes/${volume.slug}`} className="hover:text-blue-600">
                        {volume.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">{volume.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm text-slate-600">
                        <strong>Editor:</strong> {volume.editor} • <strong>Articles:</strong> {volume.articles}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {volume.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/volumes/${volume.slug}`}>
                            <BookOpen className="mr-2 h-4 w-4" />
                            View Volume
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!loading && !error && filteredVolumes.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-slate-600 mb-4">
                Try adjusting your search terms or filters to find what you&apos;re looking for.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
