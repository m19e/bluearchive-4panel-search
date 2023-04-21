import type { SchoolID, Student } from "@/types"

export const JA_PANELS_URL =
  "https://m19e.github.io/bluearchive-4panel/panels/ja.json"
export const EN_PANELS_URL =
  "https://m19e.github.io/bluearchive-4panel/panels/en.json"
export const AOHARU_PANELS_URL =
  "https://m19e.github.io/bluearchive-4panel/panels/aoharu.json"

export const PLAYABLE_URL =
  "https://m19e.github.io/bluearchive-4panel/students/playable/ja.json"
export const NPC_URL =
  "https://m19e.github.io/bluearchive-4panel/students/npc/ja.json"

export const SCHOOLS = {
  // kivotos: { id: "kivotos", ja: "キヴォトス", en: "Kivotos" },
  kivotos: { id: "kivotos", ja: "シャーレ", en: "SCHALE" },
  prime_student_council: {
    id: "prime_student_council",
    ja: "連邦生徒会",
    en: "Prime Student Council",
  },
  abydos: { id: "abydos", ja: "アビドス", en: "Abydos" },
  gehenna: { id: "gehenna", ja: "ゲヘナ", en: "Gehenna" },
  millennium: { id: "millennium", ja: "ミレニアム", en: "Millennium" },
  trinity: { id: "trinity", ja: "トリニティ", en: "Trinity" },
  hyakkiyako: { id: "hyakkiyako", ja: "百鬼夜行", en: "Hyakkiyako" },
  shanhaijing: { id: "shanhaijing", ja: "山海経", en: "Shanhaijing" },
  red_winter: { id: "red_winter", ja: "レッドウィンター", en: "Red Winter" },
  valkyrie: { id: "valkyrie", ja: "ヴァルキューレ", en: "Valkyrie" },
  arius: { id: "arius", ja: "アリウス", en: "Arius" },
  srt: { id: "srt", ja: "SRT", en: "SRT" },
  kronos: { id: "kronos", ja: "クロノス", en: "Kronos" },
  others_students: { id: "others_students", ja: "不明", en: "Others Students" },
  etc: { id: "etc", ja: "その他", en: "ETC" },
} as const

export const EMPTY_GROUPED_STUDENTS: { [key in SchoolID]: Student[] } = {
  kivotos: [],
  prime_student_council: [],
  abydos: [],
  gehenna: [],
  millennium: [],
  trinity: [],
  hyakkiyako: [],
  shanhaijing: [],
  red_winter: [],
  valkyrie: [],
  arius: [],
  srt: [],
  kronos: [],
  others_students: [],
  etc: [],
}
