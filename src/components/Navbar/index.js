import React from 'react'
import {userimage} from '../../assets/index'
import style from './navbar.module.css'

function Navbar({greeting, name}) {
  return (
    <>
      <nav className="navbar-light mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-3">
              <img className={style['profile']} src={userimage} alt="" />
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
