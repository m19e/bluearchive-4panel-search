import type { Lang, Student } from "@/types"
import { useSelectedStudents } from "@/hooks"

type Props = {
  student: Student
  lang: Lang
  noSelect?: boolean
}

export const StudentItem = ({ student, lang, noSelect = false }: Props) => {
  const { update } = useSelectedStudents()

  const borderR = `border-r-${student.school}`
  return (
    <div
      className={`p-1 rounded-sm cursor-pointer select-none bg-${student.school}`}
      onClick={() => !noSelect && update(student)}
    >
      <div className="relative py-1 px-2 bg-white">
        <p className={`font-bold text-sm text-${student.school}`}>
          {student[lang]}
        </p>
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
