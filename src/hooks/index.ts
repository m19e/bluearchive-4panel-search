import { useAtom } from "jotai"

import type { Student } from "@/types"
import { groupedStudentsAtom, selectedStudentsAtom } from "@/stores"

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
