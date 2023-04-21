import ky from "ky"
import {
  AOHARU_PANELS_URL,
  EMPTY_GROUPED_STUDENTS,
  EN_PANELS_URL,
  JA_PANELS_URL,
  NPC_URL,
  PLAYABLE_URL,
} from "@/consts"
import type { Panel, PanelData, StudentData } from "@/types"

type PanelType = "ja" | "en" | "aoharu"
const urls: { [key in PanelType]: string } = {
  ja: JA_PANELS_URL,
  en: EN_PANELS_URL,
  aoharu: AOHARU_PANELS_URL,
}

export const getPanels = async (type: PanelType) => {
  const url = urls[type]
  const panels = await ky.get(url).json<Panel[]>()

  return panels.map((p) => ({ ...p, id: `${type}-${p.id}` }))
}

const getAllStudents = async () => {
  const playable = await ky(PLAYABLE_URL).json<StudentData>()
  const npc = await ky(NPC_URL).json<StudentData>()

  return { ...playable, ...npc }
}

export const getAllPanels = async () => {
  const allStudents = await getAllStudents()

  const replaceStudents = (panels: Panel[]): PanelData[] => {
    return panels.map((p) => ({
      ...p,
      students: p.students.map((s) => allStudents[s]),
    }))
  }

  const ja = replaceStudents(await getPanels("ja"))
  const en = replaceStudents(await getPanels("en"))
  const aoharu = replaceStudents(await getPanels("aoharu"))

  return { ja, en, aoharu }
}

const getGroupedStudents = (panels: PanelData[]) => {
  const result = Object.assign({}, EMPTY_GROUPED_STUDENTS)

  const uniq = panels.reduce((prev, panel) => {
    panel.students.forEach((s) => (prev[s.id] = s))
    return prev
  }, {} as StudentData)

  Object.values(uniq).forEach((student) => {
    const { school } = student
    if (school) {
      result[school] = [...result[school], student]
    }
  })

  return result
}

export const getAllData = async () => {
  const panels = await getAllPanels()
  const students = getGroupedStudents([
    ...panels.ja,
    ...panels.en,
    ...panels.aoharu,
  ])

  return { panels, students }
}

export const getEpisodeFromID = (id: string) => {
  const digit3 = id.split("-")[1]
  const is3 = digit3.length === 3
  const digit2 = ("00" + digit3).slice(-2)

  return { digit3, digit2, is3 }
}

export { HydrateAtoms } from "@/stores/HydrateAtoms"
