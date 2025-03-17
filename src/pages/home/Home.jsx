import React, { useEffect } from 'react'
import style from './home.module.css'
import {Link} from 'react-router-dom'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

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
    <div className={style.conatiner}>
      <div className={style.content}>
        <h2>Hi👋, I'm</h2>
        <h1>Sonu Paswan</h1>
        <p>And I'm <span id='typing-animation'></span></p> 
        <div>
          <Link to={""} ><TiSocialLinkedin  className={style.linkedIn}/>
          </Link>
          <Link to={"https://github.com/SonuKumarPaswan"} ><FaGithub   className={style.linkedIn}/>
          </Link>
          <Link to={"https://github.com/SonuKumarPaswan"} ><HiOutlineMail   className={style.linkedIn}/>
          </Link>
        </div>
      </div>

      <div>
        <div className={style.one}>
          <div className={style.two}>
            <div className={style.three}>
            <div className={style.four}>
              <img src="image.jpg" alt="image" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
