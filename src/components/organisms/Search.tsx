import type { SchoolID, Student } from "@/types"
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
      keys: ["ja", "en"],
    },
  })

  const groups = convertStudentToGroup(result)

  return (
    <div>
      <input
        className="p-2 w-full border"
        onChange={(e) => search(e.target.value)}
        value={term}
        placeholder="Input student name"
      />
      <StudentList data={groups} />
    </div>
  )
}
