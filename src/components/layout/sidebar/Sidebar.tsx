import { IconBuildingStore, IconChevronDown, IconChevronUp, IconHome } from '@tabler/icons-react';
import { IconArchive, IconBuilding, IconCalendarMonth, IconChartPie, IconCreditCard, IconPhone, IconSettings, IconUserCircle } from '@tabler/icons-react'
// import { useNavigate } from 'react-router-dom';
import { Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';

interface ILinkItem {
  title: string;
  path: string;
  icon: JSX.Element;
  innerLinks?: ILinkItem[]
  open?: boolean;
}

const firstLinks: ILinkItem[] = [
  {
    title: 'Inicio',
    path: '/',
    icon: <IconHome />,
  },
  {
    title: 'Empresa',
    path: '/empresa',
    icon: <IconBuilding />,
    innerLinks: [
      {
        icon: <IconSettings/>,
        title: 'Configuración',
        path: '/empresa/configuracion',
      },
      {
        icon: <IconBuildingStore/>,
        title: 'Sucursal/es',
        path: '/empresa/sucursales',
      }
    ],
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
  const [links, setLinks] = useState<ILinkItem[]>(firstLinks)

  const navigator = useNavigate()
  const handleRedirect = (path:string)=>{
    navigator(path)
  }

  const togleOpenLinks = (title:string)=>{
    setLinks(links.map(link =>{
      if (link.title === title) {
        console.log(link.open)
        return {
          ...link,
          open: !link.open
        }
      }

      return link
    }))
  }

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
          <Fragment key={index}>
            <ListItem disablePadding onClick={()=> link.innerLinks ? togleOpenLinks(link.title) : handleRedirect(link.path)}>
              <ListItemButton>
                <ListItemIcon>
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.title} />
                {link.innerLinks ?  link.open ? <IconChevronDown /> : <IconChevronUp /> : null}
              </ListItemButton>
            </ListItem>
            {
              link.innerLinks && <Collapse in={link.open} timeout="auto" unmountOnExit>
                <List>
                  {
                    link.innerLinks.map((innerLink, index) => (
                      <ListItem key={index} sx={{ pl: 2 }} disablePadding onClick={()=> handleRedirect(innerLink.path)}>
                        <ListItemButton>
                          <ListItemIcon>
                            {innerLink.icon}
                          </ListItemIcon>
                          <ListItemText primary={innerLink.title} />
                        </ListItemButton>
                      </ListItem>
                    ))
                  }
                </List>
              </Collapse>
            }
          </Fragment>
        ))}
      </List>
      <Divider />
      <List>
        {otherLinks.map((link, index) => (
          <ListItem key={index} disablePadding onClick={()=> link.innerLinks ? togleOpenLinks(link.title) : handleRedirect(link.path)}>
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
  )
}

export default Sidebar