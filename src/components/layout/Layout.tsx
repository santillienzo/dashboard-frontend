import { ReactNode } from 'react'
import Topbar from './topbar/Topbar'
import Sidebar from './sidebar/Sidebar'
import style from './layout.module.css'

type Props = {
  children: ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <main className={style.main}>
      <Sidebar/>
      <div className={style.pageContentWrapper}>
        <Topbar/>
        {children}
      </div>
    </main>
  )
}

export default Layout