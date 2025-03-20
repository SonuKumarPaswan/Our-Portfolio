import React from 'react'
import style from './skills.module.css'
import { FaBuildingColumns } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaSchoolFlag } from "react-icons/fa6";

const Skills = () => {
 return (
     <div className={style.skillsContainer}>
       <div>
         <h1>Technical Skills</h1> 
       </div>
       <hr />
       
        <div>
         <div className={style.skills}>
           <h2><span>Program</span>ing Languages </h2>
           <hr />
           <section>
           <ul>
            <li>Core Java</li>
            <li>Advance Java</li>
            <li>SQL</li>
            <li>JavaScript</li>
           </ul>
           </section>
         </div>
       
       </div>
 
     </div>
   )
}

export default Skills
