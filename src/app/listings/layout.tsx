import SideBar from '@/components/layout/SideBar'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const ListingLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <aside className="w-1/3 lg:w-1/4">
        <SideBar />
      </aside>
      <main>{children}</main>
    </section>
  )
}

export default ListingLayout
