import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
// import style from './Topbar.module.css'
import { IconBellFilled, IconUserFilled } from '@tabler/icons-react'

// const notificationValue = 4;

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      color='transparent'
      elevation={0}
      sx={{ 
        width: `calc(100% - ${200}px)`, 
        ml: `${200}px`, 
        borderBottom: 1, 
        borderColor: 'grey.300'
      }}
    >
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" noWrap component="div" sx={{flex:1}}>
        Inicio
      </Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        <IconButton>
          <Badge badgeContent={1} color='error'>
            <IconBellFilled/>
          </Badge>
        </IconButton>
        <IconButton>
            <IconUserFilled/>
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Topbar