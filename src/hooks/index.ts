import { useMemo } from "react"
import { useAtom, useAtomValue } from "jotai"

import type { Student } from "@/types"
import {
  allPanelsAtom,
  groupedStudentsAtom,
  langAtom,
  selectedStudentsAtom,
} from "@/stores"
import { useFuseLogical } from "./useFuse"

export const useLang = () => useAtomValue(langAtom)
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

  const data = [
    { title: "ぶるーあーかいぶっ！", panels: [...ja].reverse() },
    { title: "あおはるレコード", panels: [...aoharu].reverse() },
    { title: "Official 4-Panel Manga", panels: [...en].reverse() },
  ]

  return { data, result }
}
