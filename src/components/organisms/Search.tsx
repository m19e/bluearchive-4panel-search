import { useState } from "react"

import type { SchoolID, Student } from "@/types"
import { useDebounceCallback } from "@/hooks/useDebounce"
import { useFuse } from "@/hooks/useFuse"

import { StudentList } from "@/components/molecules/StudentList"

const convertStudentToGroup = (students: Student[]) => {
  const result: { [key in SchoolID]: Student[] } = {
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

  students.forEach((student) => {
    const { school } = student
    if (school) {
      result[school] = [...result[school], student]
    }
  })

  return result
}

type Props = {
  data: { [key in SchoolID]: Student[] }
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

  const handleChange = (value: string) => {
    !loading && setLoading(true)
    debounce(() => {
      search(value)
      setLoading(false)
    })
  }

  return (
    <div className="space-y-2">
      <div className="relative">
        <input
          className="p-2 w-full font-rounded font-medium bg-sky-50 rounded border-2 border-gray-200 outline-none shadow-inner"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="検索したい生徒の名前を入力"
        />
        <div className="flex absolute top-0 right-0 items-center px-2 h-full">
          {loading ? (
            <div className="text-white btn btn-sm btn-circle loading"></div>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 14 16"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-neutral"
            >
              <path
                fillRule="evenodd"
                d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"
              ></path>
            </svg>
          )}
        </div>
      </div>
      <StudentList data={convertStudentToGroup(result)} />
    </div>
  )
}
