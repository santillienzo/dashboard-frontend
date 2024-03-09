import { ReactNode } from 'react'
import Topbar from './topbar/Topbar'
import Sidebar from './sidebar/Sidebar'
import { Box, CssBaseline, Toolbar } from '@mui/material'

type Props = {
  children: ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <Box sx={{display:'flex'}}>
      <CssBaseline />
      <Topbar/>
      <Sidebar/>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar/>
        {children}
      </Box>
    </Box>
  )
}

export default Layout