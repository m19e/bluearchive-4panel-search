import { useState } from "react"

import { EMPTY_GROUPED_STUDENTS } from "@/consts"
import type { GroupedStudents, Student } from "@/types"
import { useDebounceCallback } from "@/hooks/useDebounce"
import { useFuse } from "@/hooks/useFuse"

import { useLocale } from "@/hooks/useLocale"
import { SelectedStudents } from "@/components/organisms/SelectedStudents"
import { StudentList } from "@/components/molecules/StudentList"

const convertStudentToGroup = (students: Student[]) => {
  const result = Object.assign({}, EMPTY_GROUPED_STUDENTS)

  students.forEach((student) => {
    const { school } = student
    if (school) {
      result[school] = [...result[school], student]
    }
  })

  return result
}

type Props = {
  data: GroupedStudents
}

export const Search = ({ data }: Props) => {
  const { result, search } = useFuse({
    data: Object.values(data).flat(),
    options: {
      threshold: 0.2,
      keys: ["ja", "en"],
    },
  })
  const [loading, setLoading] = useState(false)
  const debounce = useDebounceCallback()
  const { t } = useLocale()

  const handleChange = (value: string) => {
    !loading && setLoading(true)
    debounce(() => {
      search(value)
      setLoading(false)
    })
  }

  const isEmpty = !result.length

  return (
    <div className="space-y-0 lg:space-y-4">
      <div className="overflow-hidden sticky top-0 z-50 pb-10 -mb-10 pointer-events-none sm:pb-11 sm:-mb-11 md:pb-12 md:-mb-12">
        <div className="relative">
          {/* <svg
            viewBox="0 0 1140 34"
            fill="none"
            className="absolute bottom-[-16px] left-1/2 ml-[-570px] w-[1140px]"
          >
            <g opacity=".6" filter="url(#:R5l6:-a)">
              <path fill="url(#:R5l6:-b)" d="M6 6h1128v22H6z"></path>
              <path fill="url(#:R5l6:-c)" d="M6 6h1128v22H6z"></path>
            </g>
            <defs>
              <radialGradient
                id=":R5l6:-c"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(0 -22 1128 0 563 28)"
              >
                <stop offset=".273" stopColor="#fff"></stop>
                <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
              </radialGradient>
              <linearGradient
                id=":R5l6:-b"
                x1="6"
                y1="6"
                x2="1134"
                y2="6"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A78BFA" stopOpacity="0"></stop>
                <stop offset=".323" stopColor="#A78BFA"></stop>
                <stop offset=".672" stopColor="#EC4899" stopOpacity=".3"></stop>
                <stop offset="1" stopColor="#EC4899" stopOpacity="0"></stop>
              </linearGradient>
              <filter
                id=":R5l6:-a"
                x="0"
                y="0"
                width="1140"
                height="34"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="3"
                  result="effect1_foregroundBlur_311_43535"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg> */}
          <div className="relative bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)] pointer-events-auto">
            <div className="flex flex-col px-4 mx-auto max-w-screen-lg sm:flex-row sm:items-center sm:px-6 lg:px-8">
              <div className="relative flex-auto">
                <input
                  type="search"
                  aria-label="Search all students"
                  placeholder={t.PLACEHOLDER}
                  onChange={(e) => handleChange(e.target.value)}
                  className="block py-6 pr-4 pl-9 w-full text-base text-slate-900 placeholder:text-slate-400 bg-transparent rounded-lg focus:outline-none transition appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none sm:text-[0.8125rem] sm:leading-6"
                />
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-5 h-full transition pointer-events-none fill-slate-500"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-lg bg-sky-700/25 rounded-sm shadow-inner">
          <div className="p-2 lg:p-4">
            <SelectedStudents />
          </div>
          <div className="p-2 bg-sky-700/25 rounded-sm shadow-inner lg:p-4 min-h-16">
            <div className="p-0.5 bg-white rounded-sm">
              <div className="relative p-2.5 m-0.5 rounded-sm border border-slate-400">
                {isEmpty ? (
                  <div className="flex justify-center items-center p-8 border-sky-50">
                    <p className="text-sm font-medium text-neutral">
                      {t.NO_MATCH}
                    </p>
                  </div>
                ) : (
                  <StudentList data={convertStudentToGroup(result)} />
                )}
                {loading && (
                  <div className="absolute inset-0 opacity-50 bg-neutral"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
