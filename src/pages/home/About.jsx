import React from 'react'
import style from './about.module.css'
import myImage from './image.png'
import { FiExternalLink } from "react-icons/fi";

const About = () => {
  return (
    <div id={style.container} className="about">
      <div id ={style.image}>
        <img src={myImage} alt="Image" />
      </div>
      <div id={style.about}>
      <h1>About Me </h1>
      <h4>
        <span>Front End </span> Developer
      </h4>
      <p> I'm Sonu Paswan. I have completed my B.Tech Technocrats Institute of Technology from Bhopal, MP. After Graduation I am join Jspider Noida, Up and to inhence my knowledge I am learn <span>Front End</span> and <span>Backend Technology</span>. And I solve 300+ problem on <a href="https://leetcode.com/u/zsonukumar0578/"><span>LeetCode <FiExternalLink /> </span></a> </p>
      <a href="https://www.linkedin.com/in/sonukumarpaswan/"><button> Read more</button></a>
      </div>
    </div>
  )
}

export default About
