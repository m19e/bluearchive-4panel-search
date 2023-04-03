import { useMemo, useState } from "react"
import Fuse from "fuse.js"

const convertHiraToKata = (str: string) => {
  return str.replace(/[\u3041-\u3096]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) + 0x60)
  )
}

type SearchProps<T> = {
  fuse: Fuse<T>
  data: T[]
  term: string
}

const fuzzySearch = <T>({ fuse, data, term }: SearchProps<T>) => {
  const trimmed = term.trim()
  const result = fuse.search(`${convertHiraToKata(trimmed)}`)
  return trimmed ? result.map((r) => r.item) : data
}

type Props<T> = {
  data: T[]
  options: Fuse.IFuseOptions<T>
}

export const useFuse = <T>({ data, options }: Props<T>) => {
  const [term, setTerm] = useState("")

  const fuse = useMemo(() => new Fuse(data, options), [data, options])

  const result = useMemo(
    () => fuzzySearch({ data, term, fuse }),
    [data, term, fuse]
  )

  const reset = () => setTerm("")

  return { result, search: setTerm, term, reset }
}
