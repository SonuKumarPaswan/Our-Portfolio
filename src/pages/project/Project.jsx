import React from 'react'
import styles from './project.module.css'
import productImage1 from './productImage.jpg'
import productImage2 from './BootStoreSystem.jpg'
import productImage3 from './consoleProject.png'
import { LuExternalLink } from "react-icons/lu";

const Project = () => {
  return (
    <div className={styles.container}>
       <h1>Latest Projects </h1>
       <hr />
       <div>
      <div className={styles.card} >
      <a href="https://github.com/SonuKumarPaswan/Product-Management-System" target='_blank'>
        <div>
          <img src={productImage1} alt="" />
        </div>
       
        <div className={styles.content}>
          <h2>Product-Management-System</h2>
          <p>I have designed this project utilizing a Product API to implement various features, including creating endpoint APIs ... 
          </p>
        </div>
        </a>
        <div>
        <button><a href="https://github.com/SonuKumarPaswan/Product-Management-System" target='_blank' >Github <LuExternalLink className={styles.linkIcon}  /></a></button>
          <button><a href="comingsoon" target='_blank'  >Live <LuExternalLink className={styles.linkIcon}  /></a></button>
        </div>
      </div>

      <div className={styles.card} >
      <a href="https://github.com/SonuKumarPaswan/E-book-Store-System/tree/main/Ebook_App" target='_blank'>
        <div>
          <img src={productImage2} alt="ProjectImage" />
        </div>
       
        <div className={styles.content}>
          <h2>E-book-Store-System</h2>
          <p>Developed a e-commerce platform inspired by online e-commerce platform, enabling users to buy and sell...
          {/* books across three categories: Recent Books, New Books, and Old Books, with old books exclusively available
          for purchase through the clients. Implemented secure user authentication with registration, login, and logout
          functionalities, ensuring safe access for users. Enhanced user experience by integrating a search feature with
          f
          ilters for categories and price, allowing customers to easily find specific products. Designed to provide a
          seamless and secure online shopping experience. */}
          </p>
        </div>
        </a>
        <div>
        <button><a href="https://github.com/SonuKumarPaswan/E-book-Store-System/tree/main/Ebook_App" target='_blank'  >Github <LuExternalLink className={styles.linkIcon}  /></a></button>
        <button><a href="comingsoon" target='_blank'  >Live <LuExternalLink className={styles.linkIcon}  /></a></button>
        </div>
      </div>
      <div className={styles.card} >
      <a href="https://github.com/SonuKumarPaswan/Elite_Car_Rental_System/tree/main/Elite_Car_Rental_System" target='_blank' >
        <div>
          <img src={productImage3} alt="" />
        </div>
       
        <div className={styles.content}>
          <h2>Elite_Car_Rental_System</h2>
          <p>Developed a car rental application using ArrayList for data storage, featuring rent and return functionalities...
          {/* and leveraging classes, methods, encapsulation, inheritance, and polymorphism for a versatile and
          organized car inventory system, complete with a user-friendly console interface and dynamic rental price
          calculations based on car type and duration */}
        </p>
        </div>
        </a>
        <div>
        <button><a href="https://github.com/SonuKumarPaswan/Elite_Car_Rental_System/tree/main/Elite_Car_Rental_System" target='_blank'  >Github <LuExternalLink className={styles.linkIcon} /></a></button>
        <button><a href="comingsoon" target='_blank'  >Live <LuExternalLink className={styles.linkIcon} /></a></button>
        </div>
      </div>
      
       </div>
     
    </div>
  )
}

export default Project
