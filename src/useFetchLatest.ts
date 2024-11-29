import { useEffect, useState } from "react"

interface Latest {
  version: string
}

const useFetchLatest = () => {
  const [latest, setLatest] = useState<Latest>({
    version: "0.0.0"
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchLatest = async () => {
    try {
      console.log("Fetching latest version...")
      const response = await fetch("https://robotlab-x-repo.s3.us-east-1.amazonaws.com/latest.json", {
        headers: {
          Accept: "application/vnd.github.v3+json"
        }
      })
      console.log("Response status:", response.status)
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const latest: Latest = await response.json()
      setLatest(latest)
    } catch (error) {
      console.error("Error fetching latest:", error)
      if (error instanceof Error) {
        setError(error)
      } else {
        setError(new Error("An unknown error occurred"))
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLatest()
  }, [])

  return { latest, loading, error }
}

export default useFetchLatest
