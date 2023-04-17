import type { FC } from "react"
import { useHydrateAtoms } from "jotai/utils"
import type { WritableAtom } from "jotai/vanilla"

type AnyWritableAtom = WritableAtom<unknown, any[], any>

export const HydrateAtoms: FC<{
  initialValues: [AnyWritableAtom, unknown][]
}> = ({ initialValues, children }) => {
  useHydrateAtoms(initialValues)
  return <>{children}</>
}
