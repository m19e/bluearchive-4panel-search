import { atom } from "jotai"

import type { GroupedStudents, Student } from "@/types"

// Atoms

export const groupedStudentsAtom = atom<GroupedStudents[]>([])
export const selectedStudentsAtom = atom<Student[]>([])

// Selectors
