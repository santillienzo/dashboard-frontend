import style from './sidebar.module.css'
import { IconArchive, IconBorderAll, IconBuilding, IconCalendarMonth, IconChartPie, IconCreditCard, IconPhone, IconSettings, IconUserCircle } from '@tabler/icons-react'

interface ILinkItem {
  title: string;
  path: string;
  icon: JSX.Element;
  selected?: boolean;
}

const links: ILinkItem[] = [
  {
    title: 'Panel',
    path: '/',
    icon: <IconBorderAll />
  },
  {
    title: 'Sitios',
    path: '/sitios',
    icon: <IconArchive />,
    selected: true
  },
  {
    title: 'Calendario',
    path: '/calendario',
    icon: <IconCalendarMonth />
  },
  {
    title: 'Clientes',
    path: '/clientes',
    icon: <IconUserCircle />
  },
  {
    title: 'Compañía',
    path: '/compañia',
    icon: <IconBuilding />
  },
  {
    title: 'Pagos',
    path: '/pagos',
    icon: <IconCreditCard />
  },
  {
    title: 'Reportes',
    path: '/reportes',
    icon: <IconChartPie />
  }
]

const otherLinks: ILinkItem[] = [
  {
    title: 'Ajustes',
    path: '/ajustes',
    icon: <IconSettings />
  },
  {
    title: 'Solicitar ayuda',
    path: '/solicitar-ayuda',
    icon: <IconPhone />
  }
]

const LinkItem = ({title, icon, selected}: ILinkItem)=>{
  return (
    <li className={`${style.linkItem} ${selected && style.itemSelected}`}>
      <span className={style.linkIcon}>{icon}</span>
      <span className={style.linkText}>{title}</span>
    </li>
  )
}

const Sidebar = () => {
  return (
    <nav className={style.sidebar}>
      <div className={style.logoContainer}>
        {/* <img src={logo} alt="logo" className={style.logo} /> */}
        <h5>Logo Empresa</h5>
      </div>
      <ul className={style.principalLinks}>
        {
          links.map((link, i) =>(
            <LinkItem 
              key={i} 
              title={link.title} 
              icon={link.icon} 
              path={link.path}
              selected={link.selected}
            />
          ))
        }
      </ul>
      <ul className={style.otherLinks}>
        {
          otherLinks.map((link,i) =>(
            <LinkItem key={i} title={link.title} icon={link.icon} path={link.path}/>
          ))
        }
      </ul>
    </nav>
  )
}

export default Sidebar