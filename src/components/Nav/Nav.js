import React from 'react'
import { NavLink } from 'react-router-dom'
import s from'./Nav.module.css'
const Nav=()=> {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' className={navData=>navData.isActive?s.active:s.item}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to ='/dialogs' className={navData=>navData.isActive?s.active:s.item}>Dialogs</NavLink>
        </div>
        {/* <div className={s.item}>
          <a>News</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <a> Music</a>
        </div>

        <div className={s.item}>
          <a> Settings</a>
        </div> */}
      </nav>  )
}



export default Nav

