import type { GroupedStudents } from "@/types"

import { ModalDialog } from "@/components/organisms/Modal/Dialog"
import { PanelContainer } from "@/components/organisms/PanelContainer"
import { Search } from "@/components/organisms/Search"
import { Footer } from "@/components/atoms/Footer"

type Props = {
  students: GroupedStudents
}

export const TopPage = ({ students }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-rounded bg-triangle">
        <div className="flex-1">
          <PanelContainer />
          <Search data={students} />
        </div>
        <Footer />
      </div>
      <ModalDialog />
    </>
  )
}
