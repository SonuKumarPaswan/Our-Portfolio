import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './navbar.module.css'
import { TiWeatherSunny } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className={style.container}>
        <div>
         <h2><span>Port</span>folio</h2> 
        </div>
        <div className={style.links}>
          <p><Link to={"/"} className={style.link}><span>Home</span></Link>  </p>
          <p><Link to={"/about"} className={style.link}>About</Link>  </p>
          <p><Link to={"/"} className={style.link}>Education</Link>  </p>
          <p><Link to={"/"} className={style.link}>Skills</Link>  </p>
          <p><Link to={"/"}className={style.link}>Projects</Link>  </p>
          <p><Link to={"/"}className={style.link}>Contact</Link>  </p>
          <button id={style.btn}><TiWeatherSunny  className={style.icon}/></button>
        </div>
    </div>
  )
}

export default Navbar
