import { SCHOOLS } from "@/consts"
import type { GroupedStudents, SchoolID, Student } from "@/types"
import { useLocale } from "@/hooks/useLocale"

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
//   "bg-kivotos text-kivotos border-r-kivotos border-b-kivotos bg-schale text-schale border-r-schale border-b-schale bg-general_student_council text-general_student_council border-r-general_student_council border-b-general_student_council bg-etc text-etc border-r-etc border-b-etc bg-abydos text-abydos border-r-abydos border-b-abydos bg-gehenna text-gehenna border-r-gehenna border-b-gehenna bg-millennium text-millennium border-r-millennium border-b-millennium bg-trinity text-trinity border-r-trinity border-b-trinity bg-hyakkiyako text-hyakkiyako border-r-hyakkiyako border-b-hyakkiyako bg-shanhaijing text-shanhaijing border-r-shanhaijing border-b-shanhaijing bg-red_winter text-red_winter border-r-red_winter border-b-red_winter bg-valkyrie text-valkyrie border-r-valkyrie border-b-valkyrie bg-arius text-arius border-r-arius border-b-arius bg-srt text-srt border-r-srt border-b-srt bg-kronos text-kronos border-r-kronos border-b-kronos bg-other_students text-other_students border-r-other_students border-b-other_students bg-highlander text-highlander border-r-highlander border-b-highlander bg-wild_hunt text-wild_hunt border-r-wild_hunt border-b-wild_hunt"

const School = ({ id, students }: { id: SchoolID; students: Student[] }) => {
  const { locale } = useLocale()
  if (!students.length) return null
  const studentList = students.map((s) => (
    <StudentItem key={s.id} student={s} lang={locale} />
  ))

  return (
    <div className="max-w-full lg:max-w-[calc(50%-0.25rem)]">
      <h3 className="border-b-2 border-neutral text-lg font-bold">
        <span className="whitespace-nowrap text-neutral">
          {SCHOOLS[id][locale]}
        </span>
      </h3>
      <div className="mt-1 flex flex-wrap gap-0.5">{studentList}</div>
    </div>
  )
}
