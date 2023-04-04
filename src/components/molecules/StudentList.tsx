import { SCHOOLS } from "@/consts"
import type { SchoolID, Student } from "@/types"

import { StudentItem } from "@/components/molecules/StudentItem"

type Props = {
  data: { [key in SchoolID]: Student[] }
}

export const StudentList = ({ data }: Props) => {
  const schools = Object.entries(data).map(([id, students]) => (
    <School key={id} id={id as SchoolID} students={students} />
  ))

  return (
    <div className="flex flex-wrap gap-2 font-rounded md:gap-4">{schools}</div>
  )
}

// const textForBuild =
//   "bg-kivotos text-kivotos border-r-kivotos bg-prime_student_council text-prime_student_council border-r-prime_student_council bg-etc text-etc border-r-etc bg-abydos text-abydos border-r-abydos bg-gehenna text-gehenna border-r-gehenna bg-millennium text-millennium border-r-millennium bg-trinity text-trinity border-r-trinity bg-hyakkiyako text-hyakkiyako border-r-hyakkiyako bg-shanhaijing text-shanhaijing border-r-shanhaijing bg-red_winter text-red_winter border-r-red_winter bg-valkyrie text-valkyrie border-r-valkyrie bg-arius text-arius border-r-arius bg-srt text-srt border-r-srt bg-kronos text-kronos border-r-kronos bg-others_students text-others_students border-r-others_students"

const School = ({ id, students }: { id: SchoolID; students: Student[] }) => {
  if (!students.length) return null
  const studentList = students.map((s) => (
    <StudentItem key={s.id} student={s} />
  ))

  return (
    <div className="max-w-full md:max-w-[calc(50%-1rem)]">
      <h3 className={`px-2 text-lg font-bold bg-${id}`}>
        <span className="text-white">
          {id === "kivotos" ? "シャーレ" : SCHOOLS[id].ja}
        </span>
      </h3>
      <div className="flex flex-wrap gap-1 mt-1 md:gap-2 md:mt-2">
        {studentList}
      </div>
    </div>
  )
}
