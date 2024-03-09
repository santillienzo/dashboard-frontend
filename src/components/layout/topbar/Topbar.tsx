import style from './Topbar.module.css'
import { IconBellFilled, IconMenu2, IconUserFilled } from '@tabler/icons-react'

const notificationValue = 4;

const Topbar = () => {
  return (
    <header className={style.navbar}>
      {/* Este elemento solo se va a mostrar cuando nos encontremos en pantallas menores a 768px */}
      <div className={style.toggleMenu}>
        <IconMenu2/>
      </div>
      <div className={style.userActionsContainer}>
        <h2 className={style.titlePage}>Sitios</h2>
        <div className={style.userActionsIcons}>
          <div className={style.actionsIcons}>
            <span className={style.icon}>
              <IconBellFilled size={28}/>
              <span 
                className={style.badge} 
                style={{display: notificationValue > 0 ? 'flex' : 'none'}}
              >{notificationValue}</span>
            </span>
            <span className={style.icon}>
              <IconUserFilled size={28}/>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar