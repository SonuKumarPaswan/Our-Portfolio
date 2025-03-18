import React from 'react'
import Navbar from '../../components/nav/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Home from '../home/Home'
import About from '../home/About'
import Education from '../home/Education'

const Layout = () => {
  return (
    <div>
     <Navbar/>
      <Home/>
      <About/>
      <Education/>
     <Footer/>
    </div>
  )
}

export default Layout
