export interface Article {
  title: string
  author: string
  pages: string
}

export interface Volume {
  id: number
  number: number
  year: number
  slug: string
  title: string
  summary: string
  description: string
  editor: string
  isbn?: string
  topics: string[]
  tableOfContents: Article[]
  articles: number
  coverImage?: string
  featured?: boolean
}

interface InventoryApiPayload {
  volumes?: Volume[]
}

const INVENTORY_API_PATH = "/api/inventory"

function removeTrailingSlash(value: string): string {
  return value.endsWith("/") ? value.slice(0, -1) : value
}

function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return ""
  }

  const explicitSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (explicitSiteUrl) {
    return removeTrailingSlash(explicitSiteUrl)
  }

  const vercelUrl = process.env.VERCEL_URL
  if (vercelUrl) {
    const normalized = vercelUrl.startsWith("http") ? vercelUrl : `https://${vercelUrl}`
    return removeTrailingSlash(normalized)
  }

  return "http://localhost:3000"
}

function parseInventoryResponse(payload: unknown): Volume[] {
  if (Array.isArray(payload)) {
    return payload as Volume[]
  }

  if (payload && typeof payload === "object" && Array.isArray((payload as InventoryApiPayload).volumes)) {
    return (payload as InventoryApiPayload).volumes ?? []
  }

  return []
}


export async function fetchVolumes(): Promise<Volume[]> {
  const baseUrl = getBaseUrl()
  const response = await fetch(`${baseUrl}${INVENTORY_API_PATH}`, {
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Failed to load inventory data (${response.status})`)
  }

  const payload = await response.json()
  return parseInventoryResponse(payload)
}

export function selectLatestVolumes(volumes: Volume[], count = 3): Volume[] {
  return [...volumes]
    .sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year
      return b.number - a.number
    })
    .slice(0, count)
}

export function selectFeaturedVolumes(volumes: Volume[], count = 3): Volume[] {
  const featured = volumes.filter((volume) => volume.featured)
  if (featured.length >= count) {
    return featured.slice(0, count)
  }

  const remaining = volumes.filter((volume) => !volume.featured)
  return [...featured, ...remaining].slice(0, count)
}

export function findVolumeBySlug(volumes: Volume[], slug: string): Volume | undefined {
  return volumes.find((volume) => volume.slug === slug)
}


export function selectRelatedVolumes(volumes: Volume[], id: number, count = 3): Volume[] {
  const currentVolume = volumes.find((volume) => volume.id === id)
  if (!currentVolume) return []
  return volumes
    .filter((volume) => volume.id !== id)
    .sort((a, b) => {
      const yearDifference = Math.abs(a.year - currentVolume.year) - Math.abs(b.year - currentVolume.year)
      if (yearDifference !== 0) return yearDifference
      return a.number - b.number
    })
    .slice(0, count)
}



