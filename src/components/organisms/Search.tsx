import { useState } from "react"

import { EMPTY_GROUPED_STUDENTS } from "@/consts"
import type { GroupedStudents, Student } from "@/types"
import { useSelectedStudents } from "@/hooks"
import { useDebounceCallback } from "@/hooks/useDebounce"
import { useFuse } from "@/hooks/useFuse"

import { StudentItem } from "@/components/molecules/StudentItem"
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
  const { selectedStudents } = useSelectedStudents()

  const handleChange = (value: string) => {
    !loading && setLoading(true)
    debounce(() => {
      search(value)
      setLoading(false)
    })
  }

  const isEmpty = !result.length

  const studentList = selectedStudents.length ? (
    selectedStudents.map((s) => <StudentItem key={s.id} student={s} />)
  ) : (
    <p className="py-1.5 px-3 font-bold text-gray-600 bg-white">
      まだ選択されていません
    </p>
  )

  return (
    <div className="space-y-2">
      <div className="relative p-2 rounded-sm bg-neutral/75">
        <div className="flex justify-between items-center">
          <h1 className="p-2 bg-white">サービスのロゴ</h1>
          <input
            className="p-2 font-rounded font-medium bg-sky-50 rounded border-2 border-gray-200 outline-none shadow-inner"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="生徒の名前を入力"
          />
        </div>
        <div className="flex absolute top-0 right-0 items-center px-4 h-full">
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
      <div className="flex flex-wrap gap-1 items-center mx-2 font-rounded md:gap-2">
        <p className="py-2 px-3 text-sm font-bold text-white bg-kivotos">
          選択中の生徒
        </p>
        {studentList}
      </div>
      <div className="h-0 divider"></div>
      <div className="relative px-2 min-h-16">
        {isEmpty ? (
          <div className="flex absolute inset-0 justify-center items-center border-sky-50">
            <p className="text-sm font-medium text-neutral">
              検索にヒットする生徒がいません
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
  )
}
