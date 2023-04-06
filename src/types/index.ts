import type { EMPTY_GROUPED_STUDENTS, SCHOOLS } from "@/consts"

export type Panel = {
  id: string
  title: string
  students: string[]
  href: string
  deleted?: boolean
}

export type SchoolID = keyof typeof SCHOOLS

export type Student = {
  id: string
  ja: string
  en: string
  school: SchoolID | null
}
export type StudentData = Record<string, Student>

export type PanelData = Omit<Panel, "students"> & { students: Student[] }

export type GroupedStudents = typeof EMPTY_GROUPED_STUDENTS
