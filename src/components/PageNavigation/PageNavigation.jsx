import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './PageNavigation.module.css'

const PageNavigation = ({title}) => {
  return (
    <div >
      <h3 className={style.pagenavigation}><NavLink to={'/'} className={style.navlink}>Home</NavLink>/{title}</h3>
    </div>
  )
}

export default PageNavigation
