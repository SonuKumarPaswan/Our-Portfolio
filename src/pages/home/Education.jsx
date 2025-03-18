import React from 'react'
import style from './education.module.css'
import { BsLink45Deg } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";

const Education = () => {
  return (
    <div id={style.container}>
      <h1>Education</h1>
      <div>
        <div id={style.education}>
          <h1>
            <FaBookReader  id={style.icons}/>
          </h1>
          <h3>Technocrats Institute of Technology, Bhopal <a href="http://technocratsgroup.edu.in/"><BsLink45Deg /></a></h3>
          <p><span> B.Tech </span>in Electronic and Communication  </p>
          <p>August 2020 - July 2024</p>
          <p>Los Angeles, California</p>
        </div>
        
       
      </div>
    </div>
  )
}

export default Education
