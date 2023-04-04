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
  const { result, search, term, reset } = useFuse({
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
    <div>
      <input
        className="p-2 w-full bg-sky-50 border"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Input student name"
      />
      {loading && <button className="btn loading">loading</button>}
      <StudentList data={convertStudentToGroup(result)} />
    </div>
  )
}
