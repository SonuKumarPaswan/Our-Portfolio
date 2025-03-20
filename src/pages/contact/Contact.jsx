import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div>
      <h1>Contact me</h1>
      <div></div>
      <div>
        <form action="">
            <input type="text" placeholder='Enter the name' /> <br />
            <input type="email" placeholder='Enter the Email' /> <br />
            <input type="tel" placeholder='Enter the phone' /><br />
            <input type="text" placeholder='Enter the name' /><br />
            <textarea name="" id="" placeholder='Your message'></textarea> <br />
            <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
