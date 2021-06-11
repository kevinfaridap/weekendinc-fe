import React from 'react'
import {profile} from '../../assets/index'
import style from './navbar.module.css'

function Navbar({greeting, name}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mt-3">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img className={style['profile']} src={profile} alt="" />
            </div>
            <div className="col">
              <p className={style['greeting-teks']} >{greeting}</p>
              <p className={style['name']}>{name}</p>
            </div>
          </div>
        </ div>
      </nav>
    </>
  )
}

export default Navbar
