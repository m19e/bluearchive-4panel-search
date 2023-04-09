import { SCHOOLS } from "@/consts"
import type { GroupedStudents, SchoolID, Student } from "@/types"

import { StudentItem } from "@/components/molecules/StudentItem"

type Props = {
  data: GroupedStudents
}

export const StudentList = ({ data }: Props) => {
  const schools = Object.entries(data).map(([id, students]) => (
    <School key={id} id={id as SchoolID} students={students} />
  ))

  return (
    <div className="flex flex-wrap gap-0.5 font-rounded lg:gap-1">
      {schools}
    </div>
  )
}

// const textForBuild =
//   "bg-kivotos text-kivotos border-r-kivotos border-b-kivotos bg-prime_student_council text-prime_student_council border-r-prime_student_council border-b-prime_student_council bg-etc text-etc border-r-etc border-b-etc bg-abydos text-abydos border-r-abydos border-b-abydos bg-gehenna text-gehenna border-r-gehenna border-b-gehenna bg-millennium text-millennium border-r-millennium border-b-millennium bg-trinity text-trinity border-r-trinity border-b-trinity bg-hyakkiyako text-hyakkiyako border-r-hyakkiyako border-b-hyakkiyako bg-shanhaijing text-shanhaijing border-r-shanhaijing border-b-shanhaijing bg-red_winter text-red_winter border-r-red_winter border-b-red_winter bg-valkyrie text-valkyrie border-r-valkyrie border-b-valkyrie bg-arius text-arius border-r-arius border-b-arius bg-srt text-srt border-r-srt border-b-srt bg-kronos text-kronos border-r-kronos border-b-kronos bg-others_students text-others_students border-r-others_students border-b-others_students"

const School = ({ id, students }: { id: SchoolID; students: Student[] }) => {
  if (!students.length) return null
  const studentList = students.map((s) => (
    <StudentItem key={s.id} student={s} />
  ))

  return (
    <div className="max-w-full lg:max-w-[calc(50%-1rem)]">
      <h3 className="text-lg font-bold border-b-2 border-neutral">
        <span className="text-neutral">
          {id === "kivotos" ? "シャーレ" : SCHOOLS[id].ja}
        </span>
      </h3>
      <div className="flex flex-wrap gap-0.5 mt-1 lg:gap-1 lg:mt-1">
        {studentList}
      </div>
    </div>
  )
}
