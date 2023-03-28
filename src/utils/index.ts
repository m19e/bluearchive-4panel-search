import ky from "ky"
import {
  JA_PANELS_URL,
  EN_PANELS_URL,
  AOHARU_PANELS_URL,
  PLAYABLE_URL,
  NPC_URL,
} from "@/consts"
import type { Panel, Student } from "@/types"

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

type StudentData = Record<string, Student>

const getAllStudents = async () => {
  const playable = await ky(PLAYABLE_URL).json<StudentData>()
  const npc = await ky(NPC_URL).json<StudentData>()

  return { ...playable, ...npc }
}

export const getAllPanels = async () => {
  const allStudents = await getAllStudents()

  const replaceStudents = (panels: Panel[]) => {
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
