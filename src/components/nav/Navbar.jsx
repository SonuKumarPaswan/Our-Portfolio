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
          <Link to={"/"} className={style.link}> <p><span>Home</span></p></Link>  
          <Link to={"/about"} className={style.link}> <p>About</p> </Link> 
          <Link to={"/education"} className={style.link}> <p>Education</p> </Link>  
         <Link to={"/skills"} className={style.link}> <p>Skills</p> </Link> 
          <Link to={"/projects"}className={style.link}>  <p>Projects</p>  </Link>
          <Link to={"/contact"}className={style.link}> <p>Contact</p>  </Link>  
          {/* <button id={style.btn}><TiWeatherSunny  className={style.icon}/></button> */}
        </div>
    </div>
  )
}

export default Navbar
