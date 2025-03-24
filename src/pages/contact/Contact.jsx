import React, { useState } from 'react'
import styles from './contact.module.css'
import { RiContactsFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
// import emailjs from 'emailjs-com';

const Contact = () => {
  let [contact,setContact]=useState({
    name:'',
    email:'',
    phone:'',
    subject:'',
    message:''
  });
  function handleChange(e){
    let {name,value}=e.target;
    setContact({...contact,[name]:value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    // Send the email using EmailJS
    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          subject: contact.subject,
          message: contact.message,
        },
        userID
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Your message has been sent successfully!');
          // Reset the form
          setContact({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send the message. Please try again later.');
        }
      );
  };


  return (
    <div className={styles.contactContainer}>
      <div>
      <h1>Contact me</h1> <hr />
      </div>
      
      <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <h3>Please feel free to send us an email should there be any job opportunities that align well with the skills and experiences outlined in my portfolio</h3>
        <div>
          <div><h1><RiContactsFill className={styles.contacticon}  /></h1></div>
         <div>
         <p>Name</p>
         <p>Sonu Kumar Paswan</p>
         </div>
        </div>
        <div>
         <div> <h1><FaLocationDot className={styles.contacticon}  /></h1></div>
          <div><p>Loacation</p>
          <p>Noida Sector-15</p>
          </div>
        </div>


        <div>
          <div>
          <h1><HiOutlineMail  className={styles.contacticon}  /></h1>
          </div>
         <div>
          <p>Email</p>
          <p> sonupaswan0381@gmail.com</p>
         </div>
        </div>

      </div>

      <div className={styles.contactForm}>
        <h3><span>Mess</span>age me</h3>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter the name'  onChange={handleChange} name='name' value={contact.name}  required/> <br />
            <input type="email" placeholder='Enter the Email' name='email' value={contact.email} required onChange={handleChange} /> <br />
            <input type="tel" placeholder=' +91 Enter the phone'onChange={handleChange} maxLength={10} required name='phone' value={contact.phone}/><br />
            <input type="text" placeholder='Enter Subject'onChange={handleChange} name='subject' value={contact.subject} required /><br />
            <textarea name='message' value={contact.message} id="" placeholder='Your message' rows={5} onChange={handleChange}  /><br />
            <button type='submit'>Send  message</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
