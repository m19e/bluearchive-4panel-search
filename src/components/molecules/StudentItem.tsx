import type { Student } from "@/types"

export const StudentItem = ({ student }: { student: Student }) => {
  const borderR = `border-r-${student.school}`
  return (
    <div className={`p-1 rounded-sm cursor-pointer bg-${student.school}`}>
      <div className="relative py-1 px-2 bg-white">
        <p className={`font-bold text-sm text-${student.school}`}>
          {student.ja}
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
