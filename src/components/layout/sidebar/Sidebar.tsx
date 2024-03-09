import { IconHome } from '@tabler/icons-react';
import { IconArchive, IconBuilding, IconCalendarMonth, IconChartPie, IconCreditCard, IconPhone, IconSettings, IconUserCircle } from '@tabler/icons-react'
// import { useNavigate } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';

interface ILinkItem {
  title: string;
  path: string;
  icon: JSX.Element;
  selected?: boolean;
}

const links: ILinkItem[] = [
  {
    title: 'Inicio',
    path: '/',
    icon: <IconHome />,
    selected: true
  },
  {
    title: 'Empresa',
    path: '/empresa',
    icon: <IconBuilding />
  },
  {
    title: 'Productos',
    path: '/productos',
    icon: <IconArchive />,
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
    title: 'Pagos',
    path: '/pagos',
    icon: <IconCreditCard />
  },
  {
    title: 'Reportes',
    path: '/reportes',
    icon: <IconChartPie />
  },
  {
    title: 'Mercado Pago',
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

const Sidebar = () => {  
  return (
    <Drawer
      sx={{
        width: 200,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 200,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {links.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {link.icon}
              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {otherLinks.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {link.icon}
              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
    // <nav className={style.sidebar}>
    //   <div className={style.logoContainer}>
    //     {/* <img src={logo} alt="logo" className={style.logo} /> */}
    //     <h5>Logo Empresa</h5>
    //   </div>
    //   <ul className={style.principalLinks}>
    //     {
    //       links.map((link, i) =>(
    //         <LinkItem 
    //           key={i} 
    //           title={link.title} 
    //           icon={link.icon} 
    //           path={link.path}
    //           selected={link.selected}
    //         />
    //       ))
    //     }
    //   </ul>
    //   <ul className={style.otherLinks}>
    //     {
    //       otherLinks.map((link,i) =>(
    //         <LinkItem key={i} title={link.title} icon={link.icon} path={link.path}/>
    //       ))
    //     }
    //   </ul>
    // </nav>
  )
}

export default Sidebar