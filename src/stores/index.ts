import { atom } from "jotai"

import type { GroupedStudents, Lang, PanelData, Student } from "@/types"

// Atoms

export const langAtom = atom<Lang>("ja")
export const allPanelsAtom = atom<{
  ja: PanelData[]
  en: PanelData[]
  aoharu: PanelData[]
}>({ ja: [], en: [], aoharu: [] })
export const groupedStudentsAtom = atom<GroupedStudents[]>([])
export const selectedStudentsAtom = atom<Student[]>([])

// Selectors
