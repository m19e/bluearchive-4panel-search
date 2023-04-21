import { useSelectedStudents } from "@/hooks"
import { useLocale } from "@/hooks/useLocale"
import { StudentItem } from "@/components/molecules/StudentItem"

export const SelectedStudents = () => {
  const { locale } = useLocale()
  const { selectedStudents } = useSelectedStudents()
  const studentList = selectedStudents.length ? (
    selectedStudents.map((s) => (
      <StudentItem key={s.id} student={s} lang={locale} />
    ))
  ) : (
    <EmptyLabel />
  )

  return (
    <div className="flex flex-wrap gap-0.5 items-center">
      <SelectedLabel />
      {studentList}
    </div>
  )
}

const SelectedLabel = () => {
  const { t } = useLocale()
  return (
    <p className="py-2 px-3 text-sm font-bold text-white bg-kivotos rounded">
      {t.SELECTED}
    </p>
  )
}

const EmptyLabel = () => {
  const { t } = useLocale()
  return (
    <p className="p-1.5 font-bold text-gray-600 bg-white rounded-sm">
      {t.SELECTED_EMPTY}
    </p>
  )
}
