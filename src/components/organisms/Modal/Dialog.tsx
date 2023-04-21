import type { PanelData, Student } from "@/types"
import { getEpisodeFromID } from "@/utils"
import { useSelectedPanel } from "@/hooks"
import { useLocale } from "@/hooks/useLocale"
import { TwitterTweetEmbed } from "@/utils/TwitterTweetEmbed"

import { StudentItem } from "@/components/molecules/StudentItem"

const getEpisode = (panel: PanelData) => {
  const { digit3, digit2, is3 } = getEpisodeFromID(panel.id)
  return is3 ? digit3 : digit2
}

const getTweetId = (href: string): string => {
  return href.split("/").at(-1)!
}

export const ModalDialog = () => {
  const [selectedPanel] = useSelectedPanel()
  const { t } = useLocale()
  if (selectedPanel === null) return null

  const episode = getEpisode(selectedPanel)
  const { title, students, href, deleted } = selectedPanel

  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <label htmlFor="modal" className="cursor-pointer modal">
        <label
          className="overflow-hidden relative p-0 font-rounded rounded-lg modal-box"
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
            <h3 className="pt-1 text-lg font-bold text-sky-900 border-b-4 border-yellow-200">
              {t.EPISODE_INFO}
            </h3>
          </div>
          <div className="overflow-y-auto px-4 pt-2 max-h-[75vh]">
            <p className="text-lg font-bold">
              <span className="text-sky-900">{episode}</span>
              <span className="text-slate-300"> | </span>
              {title}
            </p>
            <div className="my-2 h-0 divider"></div>
            <div className="py-0.5 my-2 bg-sky-900 rounded -skew-x-12">
              <p className="text-sm font-semibold text-center text-white skew-x-12">
                {t.STUDENTS}
              </p>
            </div>

            <Students students={students} />
            {deleted ? (
              <div className="py-4">
                <div className="flex justify-center">
                  <OfficialLink href={href} label={t.OFFICIAL} />
                </div>
              </div>
            ) : (
              <TwitterTweetEmbed
                tweetId={getTweetId(href)}
                placeholder={<Placeholder />}
              />
            )}
          </div>
        </label>
      </label>
    </>
  )
}

const Students = ({ students }: { students: Student[] }) => {
  const { locale } = useLocale()
  const studentList = students.map((s) => (
    <StudentItem key={s.id} student={s} lang={locale} noSelect />
  ))

  return (
    <div className="flex flex-wrap gap-0.5 items-center">{studentList}</div>
  )
}

const OfficialLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center py-2 px-4 bg-sky-300 rounded shadow-md -skew-x-12"
    >
      <span className="font-bold skew-x-[11deg]">{label}</span>
    </a>
  )
}

const Placeholder = () => {
  return (
    <div className="flex justify-center items-center my-2 w-full h-24 bg-sky-50 rounded-md border">
      <button className="bg-kivotos border-none btn btn-square loading"></button>
    </div>
  )
}
