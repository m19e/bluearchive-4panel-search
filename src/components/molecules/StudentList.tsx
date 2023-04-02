import { SCHOOLS } from "@/consts"
import type { Student, SchoolID } from "@/types"

type Props = {
  data: { [key in SchoolID]: Student[] }
}

export const StudentList = ({ data }: Props) => {
  const schools = Object.entries(data).map(([id, students]) => (
    <School key={id} id={id as SchoolID} students={students} />
  ))

  return <div className="flex flex-wrap gap-4 font-rounded">{schools}</div>
}

// const textForBuild =
//   "bg-kivotos text-kivotos border-r-kivotos bg-prime_student_council text-prime_student_council border-r-prime_student_council bg-etc text-etc border-r-etc bg-abydos text-abydos border-r-abydos bg-gehenna text-gehenna border-r-gehenna bg-millennium text-millennium border-r-millennium bg-trinity text-trinity border-r-trinity bg-hyakkiyako text-hyakkiyako border-r-hyakkiyako bg-shanhaijing text-shanhaijing border-r-shanhaijing bg-red_winter text-red_winter border-r-red_winter bg-valkyrie text-valkyrie border-r-valkyrie bg-arius text-arius border-r-arius bg-srt text-srt border-r-srt bg-kronos text-kronos border-r-kronos bg-others_students text-others_students border-r-others_students"

const School = ({ id, students }: { id: SchoolID; students: Student[] }) => {
  if (!students.length) return null
  const studentList = students.map((s) => (
    <StudentItem key={s.id} id={id} student={s} />
  ))

  return (
    <div className="max-w-[calc(50%-1rem)]">
      <h3 className={`px-2 text-lg font-bold bg-${id}`}>
        <span className="text-white">
          {id === "kivotos" ? "シャーレ" : SCHOOLS[id].ja}
        </span>
      </h3>
      <div className="flex flex-wrap gap-2 mt-2">{studentList}</div>
    </div>
  )
}

const StudentItem = ({ id, student }: { id: SchoolID; student: Student }) => {
  const borderR = `border-r-${id}`
  return (
    <div className={`p-1 rounded-sm bg-${id}`}>
      <div className="relative py-1 px-2 bg-white">
        <p className={`font-bold text-sm text-${id}`}>{student.ja}</p>
        <div
          className={
            "absolute right-0 bottom-0 w-0 h-0 border-t-[0.5rem] border-r-[0.5rem] border-t-gray-300 " +
            borderR
          }
        ></div>
      </div>
    </div>
  )
}
