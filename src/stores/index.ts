import { atom } from "jotai"

import type { GroupedStudents, PanelData, Student } from "@/types"

// Atoms

export const allPanelsAtom = atom<{
  ja: PanelData[]
  en: PanelData[]
  aoharu: PanelData[]
}>({ ja: [], en: [], aoharu: [] })
export const groupedStudentsAtom = atom<GroupedStudents[]>([])
export const selectedStudentsAtom = atom<Student[]>([])
export const selectedPanelAtom = atom<PanelData | null>(null)

// Selectors
