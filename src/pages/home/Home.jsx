import React, { Fragment, useEffect } from 'react'
import style from './home.module.css'
import {Link} from 'react-router-dom'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { GrView } from "react-icons/gr";
import myImage from './image.png'
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Project from '../project/Project';
import Contact from '../contact/Contact';
// import style from '../home/about.module.css'

const Home = () => {

  useEffect(() => {
						const typingAnimationElement = document.getElementById('typing-animation');
						const typingTexts = [
						'Front End Developer',
						'Back End Developer',
            "Web Developer"
						];
						function playTypingAnimation(text) {
						for (let i = 0; i < text.length; i++) {
							setTimeout(() => {
							typingAnimationElement.textContent += text[i];
							}, i * 100);
						}
						setTimeout(() => {
							typingAnimationElement.textContent = '';
							playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
						}, text.length * 200);
						}
						playTypingAnimation(typingTexts[0]);
          });

  return (
    <div>
    <div className={style.conatiner}>
      <div className={style.content}>
        <h2>Hi👋, I'm</h2>
        <h1>Sonu Paswan</h1>
        <p>And I'm <span id='typing-animation'></span></p> 
        <i>I'm Passionate and motivated Java Full Stack Developer with <br /> a solid  foundation in   Java programming and web <br /> development technologies.
        </i>
        <div>
          <Link to={"https://www.linkedin.com/in/sonukumarpaswan/"} ><TiSocialLinkedin  className={style.linkedIn}/>
          </Link>
          <Link to={"https://github.com/SonuKumarPaswan"} ><FaGithub   className={style.linkedIn}/>
          </Link>
          <Link to={"https://www.instagram.com/er.sonu__0578/"}  alt="_black"  ><FaInstagram   className={style.linkedIn}/>
          </Link>
          <Link to={"https://leetcode.com/u/zsonukumar0578/"} ><SiLeetcode   className={style.linkedIn}/>
          </Link>
        </div>

        <div>
          <Link to={"https://drive.google.com/file/d/13_cO5fr6P_1oeR7McOdKOZmjWHDzxyIS/view?usp=sharing"}><button id={style.cv}>View CV <GrView className={style.cvIcon} /> </button></Link>
        </div>
      
      </div>

      <div>
        <div className={style.one}>  
            <img src={myImage} alt="Image" className={style.photo} id='imag'  />
          <div className={style.two}>
            <div className={style.three}>
            <div className={style.four}>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <About/>
    <Education/>
    <Skills/>
    <Project/>
    <Contact/>
     {/* <div id={style.container} className="about">
          <div id ={style.image}>
            <img src={myImage} alt="Image" />
          </div>
          <div id={style.about}>
          <h1>About Me </h1>
          <h4>
            <span>Front End </span> Developer
          </h4>
          <p> I'm Sonu Paswan. I have completed my B.Tech Technocrats Institute of Technology from Bhopal, MP. Passionate about building scalable web applications using Java, Spring Boot, and modern frontend & Backend frameworks. And I solve 300+ problem on <a href="https://leetcode.com/u/zsonukumar0578/"><span>LeetCode <FiExternalLink /> </span></a> </p>
          <a href="https://www.linkedin.com/in/sonukumarpaswan/"><button> Read more</button></a>
          </div>
        </div> */}

    </div>
  )
}

export default Home
