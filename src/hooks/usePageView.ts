import { useRouter } from "next/router"
import { useEffect } from "react"

import { GA_ID, pageview } from "@/utils/gtag"

export const usePageView = () => {
  const router = useRouter()
  useEffect(() => {
    if (!GA_ID) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRouteChange = (url: string, { shallow }: any) => {
      if (!shallow) {
        pageview(url)
      }
    }

    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])
}
