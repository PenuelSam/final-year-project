import { useEffect, useState } from "react"
import { fetchVolumes, type Volume } from "@/lib/data"

interface UseVolumesResult {
  volumes: Volume[]
  loading: boolean
  error: string | null
}

export function useVolumes(): UseVolumesResult {
  const [volumes, setVolumes] = useState<Volume[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function load() {
      try {
        const data = await fetchVolumes()
        if (isMounted) {
          setVolumes(data)
          setError(null)
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unable to load inventory"
        if (isMounted) {
          setError(message)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    load()

    return () => {
      isMounted = false
    }
  }, [])

  return { volumes, loading, error }
}