import { useMemo } from "react"
import { useAtom, useAtomValue } from "jotai"

import type { Student } from "@/types"
import {
  allPanelsAtom,
  groupedStudentsAtom,
  selectedPanelAtom,
  selectedStudentsAtom,
} from "@/stores"
import { useFuseLogical } from "./useFuse"
import { useLocale } from "./useLocale"

export const useGroupedStudents = () => useAtom(groupedStudentsAtom)
export const useSelectedStudents = () => {
  const [selectedStudents, setSelected] = useAtom(selectedStudentsAtom)

  const select = (student: Student) => setSelected((prev) => [...prev, student])
  const unselect = (student: Student) =>
    setSelected((prev) => [...prev.filter((s) => s.id !== student.id)])

  const update = (student: Student) => {
    const isSelected = selectedStudents.some((s) => s.id === student.id)
    isSelected ? unselect(student) : select(student)
  }

  return { selectedStudents, update }
}

export const usePanels = () => {
  const { locale } = useLocale()
  const allPanels = useAtomValue(allPanelsAtom)
  const selectedStudents = useAtomValue(selectedStudentsAtom)
  const selectedQuery = useMemo(
    () =>
      selectedStudents.map((s) => ({
        $path: ["students", "id"],
        $val: s.id,
      })),
    [selectedStudents]
  )
  const { result } = useFuseLogical({
    data: Object.values(allPanels).flat(),
    options: {
      threshold: 0,
      keys: [["students", "id"]],
    },
    query: {
      $or: selectedQuery,
    },
  })

  const { ja, en, aoharu } = allPanels

  const data =
    locale === "ja"
      ? [
          { title: "ぶるーあーかいぶっ！", panels: [...ja].reverse() },
          { title: "あおはるレコード", panels: [...aoharu].reverse() },
          { title: "Official 4-Panel Manga", panels: [...en].reverse() },
        ]
      : [
          { title: "Official 4-Panel Manga", panels: [...en].reverse() },
          { title: "ぶるーあーかいぶっ！", panels: [...ja].reverse() },
          { title: "あおはるレコード", panels: [...aoharu].reverse() },
        ]

  return { data, result }
}

export const useSelectedPanel = () => useAtom(selectedPanelAtom)
