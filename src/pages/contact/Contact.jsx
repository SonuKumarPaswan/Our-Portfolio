import React from 'react'
import styles from './contact.module.css'
import { RiContactsFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div>
      <h1>Contact me</h1> <hr />
      </div>
      
      <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <h3>Please feel free to send us an email should there be any job opportunities that align well with the skills and experiences outlined in my portfolio</h3>
        <div>
          <div><h1><RiContactsFill /></h1></div>
         <div>
         <p>Name</p>
         <p>Sonu Kumar Paswan</p>
         </div>
        </div>
        <div>
         <div> <h1><FaLocationDot /></h1></div>
          <div><p>Loacation</p>
          <p>Noida Sector-15</p>
          </div>
        </div>


        <div>
          <div>
          <h1><HiOutlineMail /></h1>
          </div>
         <div>
          <p>Email</p>
          <p> sonupaswan0381@gmail.com</p>
         </div>
        </div>

      </div>

      <div className={styles.contactForm}>
        <h3><span>Mess</span>age me</h3>
        <form action="">
            <input type="text" placeholder='Enter the name' autoFocus /> <br />
            <input type="email" placeholder='Enter the Email' /> <br />
            <input type="tel" placeholder='Enter the phone' /><br />
            <input type="text" placeholder='Enter Subject' /><br />
            <textarea name="" id="" placeholder='Your message' rows={5}></textarea> <br />
            <button>Send  message</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
