import React from 'react'
import Navbar from '../../components/nav/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Home from '../home/Home'
import About from '../home/About'
import Education from '../home/Education'
import Skills from '../home/Skills'
import Project from '../project/Project'
import Contact from '../contact/Contact'

const Layout = () => {
  return (
    <div>
     <Navbar/>
     <Outlet/>
      <Home/> 
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
    
     <Footer/>
    </div>
  )
}

export default Layout
