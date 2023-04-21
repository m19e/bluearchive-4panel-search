import { Fragment, useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    twttr: any
  }
}

interface JSONObject {
  [k: string]: any
}

export interface TwitterTweetEmbedProps {
  /**
   * Tweet id that needs to be shown
   */
  tweetId: string
  /**
   * Additional options to pass to twitter widget plugin
   */
  options?: JSONObject
  /**
   * Placeholder while tweet is loading
   */
  placeholder?: string | React.ReactNode
  /**
   * Function to execute after load, return html element
   */
  onLoad?: (element: any) => void
}

const methodName = "createTweet"

export const TwitterTweetEmbed = (props: TwitterTweetEmbedProps): any => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isComponentMounted = true
    setLoading(true)
    if (!window.twttr) {
      console.error("Failure to load window.twttr, aborting load")
      return
    }
    if (isComponentMounted) {
      if (!window.twttr.widgets[methodName]) {
        console.error(
          `Method ${methodName} is not present anymore in twttr.widget api`
        )
        return
      }

      while (ref.current?.firstChild) {
        ref.current?.removeChild(ref.current?.firstChild)
      }

      window.twttr.widgets[methodName](
        props.tweetId,
        ref?.current,
        props.options
      ).then((element: any) => {
        setLoading(false)
        if (props.onLoad) {
          props.onLoad(element)
        }
      })
    }

    // cleaning up
    return () => {
      isComponentMounted = false
    }
  }, [props])

  return (
    <Fragment>
      {loading && <Fragment>{props.placeholder}</Fragment>}
      <div ref={ref} />
    </Fragment>
  )
}
