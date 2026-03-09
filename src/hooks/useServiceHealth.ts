import { useEffect, useState } from 'react'
import { TAB_CONFIG } from '../config'

const INTERVAL_MS = 30_000

export function useServiceHealth(): Record<string, boolean> {
  const urls = [...new Set(TAB_CONFIG.map((t) => t.healthUrl))]
  const [status, setStatus] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(urls.map((u) => [u, false])),
  )

  useEffect(() => {
    const check = async () => {
      const results = await Promise.all(
        urls.map(async (url) => {
          try {
            await fetch(url, { mode: 'no-cors', cache: 'no-store' })
            return [url, true] as const
          } catch {
            return [url, false] as const
          }
        }),
      )
      setStatus(Object.fromEntries(results))
    }

    check()
    const id = setInterval(check, INTERVAL_MS)
    return () => clearInterval(id)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return status
}
