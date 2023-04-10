import { useSelectedStudents } from "@/hooks"
import { StudentItem } from "@/components/molecules/StudentItem"

export const SelectedStudents = () => {
  const { selectedStudents } = useSelectedStudents()
  const studentList = selectedStudents.length ? (
    selectedStudents.map((s) => <StudentItem key={s.id} student={s} />)
  ) : (
    <EmptyLabel />
  )

  return (
    <div className="flex flex-wrap gap-1 items-center mx-2 font-rounded md:gap-2">
      <p className="py-2 px-3 text-sm font-bold text-white bg-kivotos">
        選択中の生徒
      </p>
      {studentList}
    </div>
  )
}

const EmptyLabel = () => {
  return (
    <p className="py-1.5 font-bold text-gray-600 bg-white">
      まだ選択されていません
    </p>
  )
}
