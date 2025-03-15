import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <section>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink>  </li>
          <li><NavLink to={"/"}>Home</NavLink>  </li>
          <li><NavLink to={"/"}>Home</NavLink>  </li>
        </ul>
      </section>
    </div>
  )
}

export default Navbar
