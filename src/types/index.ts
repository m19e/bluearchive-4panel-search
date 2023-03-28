import type { SCHOOLS } from "@/consts"

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
