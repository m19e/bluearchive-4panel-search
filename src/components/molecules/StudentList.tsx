import { SCHOOLS } from "@/consts"
import type { Student, SchoolID } from "@/types"

type Props = {
  data: { [key in SchoolID]: Student[] }
}

export const StudentList = ({ data }: Props) => {
  const schools = Object.entries(data).map(([id, students]) => (
    <School key={id} id={id as SchoolID} students={students} />
  ))

  return <div className="space-y-4 font-rounded">{schools}</div>
}

const School = ({ id, students }: { id: SchoolID; students: Student[] }) => {
  if (!students.length) return null
  const studentList = students.map((s) => (
    <StudentItem key={s.id} student={s} />
  ))

  return (
    <div>
      <h3 className="text-lg">{id === "kivotos" ? "" : SCHOOLS[id].ja}</h3>
      <div className="flex flex-wrap gap-2">{studentList}</div>
    </div>
  )
}

const StudentItem = ({ student }: { student: Student }) => {
  return (
    <div className="px-2 rounded border-2 border-sky-300 -skew-x-12">
      {student.ja}
    </div>
  )
}
