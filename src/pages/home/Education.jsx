import React from 'react'
import style from './education.module.css'
import { FaBuildingColumns } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaSchoolFlag } from "react-icons/fa6";

const Education = () => {
  return (
    <div className={style.educationContainer}>
      <div>
        <h1>Education</h1>
      </div>
      <hr />
       <div>
        <div className={style.education}>
          <IoSchoolSharp  className={style.collegeIcon}/>
          <h2><span>Techno</span>crats Institute of Technology Bhopal, MP </h2>

          <p><b>B.Tech </b>in </p>
          <p>Electronic and Communication</p>
          <p>Aug 2020- July 2024</p>
          <p>CGPA - 8.78 </p>
        </div>

        <div className={style.education}>
          <FaBuildingColumns  className={style.collegeIcon}/>
          <h2><span>Ram Kris</span>hna College Madhubani, Bihar </h2>

          <p><b>12</b><sup>th</sup>  </p>
          <p>Science (Math)</p>
          <p> Aug 2018- March 2020</p>
          <p>Persentage - 71% </p>
        </div>
        <div className={style.education}>
          <FaSchoolFlag  className={style.collegeIcon}/>
          <h2><span>Kabir Hi</span>gh School Selra, Madhubani </h2>

          <p><b>10</b><sup>th</sup> </p>
          <p>Sanskrit</p>
          <p> March 2017- Feb 2018</p>
          <p>Persentage - 62.6%</p>
        </div>
      </div>

    </div>
  )
}

export default Education
