import type { PanelData, Student } from "@/types"
import { getEpisodeFromID } from "@/utils"
import { useSelectedPanel } from "@/hooks"
import { useLocale } from "@/hooks/useLocale"
import { StudentItem } from "@/components/molecules/StudentItem"

const getEpisode = (panel: PanelData) => {
  const { digit3, digit2, is3 } = getEpisodeFromID(panel.id)
  return is3 ? digit3 : digit2
}

export const ModalDialog = () => {
  const [selectedPanel] = useSelectedPanel()
  const { t } = useLocale()
  if (selectedPanel === null) return null

  const episode = getEpisode(selectedPanel)
  const { title, students } = selectedPanel

  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <label htmlFor="modal" className="cursor-pointer modal">
        <label
          className="relative p-0 font-rounded rounded-lg modal-box"
          htmlFor=""
        >
          <label htmlFor="modal" className="absolute top-0.5 right-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
          <div className="flex justify-center border-b-2 border-slate-100">
            <h3 className="pt-1 text-lg font-bold border-b-4 border-yellow-200">
              {t.EPISODE_INFO}
            </h3>
          </div>
          <p>
            {episode} | {title}
          </p>
          <p>{t.STUDENTS}</p>
          <Students students={students} />
        </label>
      </label>
    </>
  )
}

export const Students = ({ students }: { students: Student[] }) => {
  const { locale } = useLocale()
  const studentList = students.map((s) => (
    <StudentItem key={s.id} student={s} lang={locale} />
  ))

  return (
    <div className="flex flex-wrap gap-0.5 items-center">{studentList}</div>
  )
}
