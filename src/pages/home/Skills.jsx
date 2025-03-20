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

        <div className={style.skillsWrapper}>
        
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
         <div className={style.skills}>
           <h2><span>Front e</span>nd Technologies </h2>
           <hr />
           <section>
           <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React Js(hooks, props, redux)</li>
           </ul>
           </section>
         </div>
         <div className={style.skills}>
           <h2><span>Back e</span>nd Technologies </h2>
           <hr />
           <section>
           <ul>
            <li>JDBC</li>
            <li>Servlet</li>
            <li>Spring Boot</li>
            <li>Spring MVC</li>
            <li>Hibernate</li>
           </ul>
           </section>
         </div>
         <div className={style.skills}>
           <h2><span>Datab</span>ase </h2>
           <hr />
           <section>
           <ul>
            <li>MySql</li>
            <li>Oracle</li>
            <li>Mongo Db</li>
           </ul>
           </section>
         </div>

         <div className={style.skills}>
           <h2><span>Develo</span>pment tools </h2>
           <hr />
           <section>
           <ul>
            <li>VS code</li>
            <li>Eclipse</li>
            <li>IntelliJ IDEA </li>
            <li>Git & Github</li>
           </ul>
           </section>
         </div>
         <div className={style.skills}>
           <h2><span>Frame</span>work  </h2>
           <hr />
           <section>
           <ul>
            <li>React Js</li>
            <li>Hibernate</li>
            <li>Bootstrap</li>
            <li>Tailwind Css</li>
            <li>Spring boot</li>
           </ul>
           </section>
         </div>
       
       </div>
 
     </div>
   )
}

export default Skills
