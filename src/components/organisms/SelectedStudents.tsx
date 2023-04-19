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
    <div className="flex flex-wrap gap-0.5 items-center">
      <p className="py-2 px-3 text-sm font-bold text-white bg-kivotos rounded">
        選択中の生徒
      </p>
      {studentList}
    </div>
  )
}

const EmptyLabel = () => {
  return (
    <p className="p-1.5 font-bold text-gray-600 bg-white rounded-sm">
      まだ選択されていません
    </p>
  )
}
