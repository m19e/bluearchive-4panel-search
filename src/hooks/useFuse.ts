import { useState } from "react"
import Fuse from "fuse.js"

type SearchProps<T> = {
  fuse: Fuse<T>
  data: T[]
  term: string
}

const fuzzySearch = <T>({ fuse, data, term }: SearchProps<T>) => {
  const trimmed = term.trim()
  const result = fuse.search(`${trimmed}`)
  return trimmed ? result.map((r) => r.item) : data
}

type Props<T> = {
  data: T[]
  options: Fuse.IFuseOptions<T>
}

export const useFuse = <T>({ data, options }: Props<T>) => {
  const [term, setTerm] = useState("")

  const fuseOptions = {
    threshold: 0.2,
    ...options,
  }

  const fuse = new Fuse(data, fuseOptions)

  const result = fuzzySearch({ data, term, fuse })

  const reset = () => setTerm("")

  return { result, search: setTerm, term, reset }
}
