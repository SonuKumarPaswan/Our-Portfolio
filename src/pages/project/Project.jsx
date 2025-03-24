import React from 'react'
import styles from './project.module.css'
import productImage from './product image.jpg'
import { LuExternalLink } from "react-icons/lu";

const Project = () => {
  return (
    <div className={styles.container}>
       <h1>Latest Projects </h1>
       <hr />
       <div>
      <div className={styles.card} >
      <a href="https://github.com/SonuKumarPaswan/" target='_blank'>
        <div>
          <img src={productImage} alt="" />
        </div>
       
        <div className={styles.content}>
          <h2>Product-Management-System</h2>
          <p>This project is design using product api and including 50+ product in ...</p>
        </div>
        </a>
        <div>
        <button><a href="https://github.com/SonuKumarPaswan/Product-Management-System" target='_blank' >Github <LuExternalLink className={styles.linkIcon}  /></a></button>
          <button><a href="">Live <LuExternalLink className={styles.linkIcon}  /></a></button>
        </div>
      </div>

      <div className={styles.card} >
      <a href="https://github.com/SonuKumarPaswan/" target='_blank'>
        <div>
          <img src={productImage} alt="ProjectImage" />
        </div>
       
        <div className={styles.content}>
          <h2>Product-Management-System</h2>
          <p>This project is design using product api and including 50+ product in ...</p>
        </div>
        </a>
        <div>
        <button><a href="https://github.com/SonuKumarPaswan/">Github <LuExternalLink className={styles.linkIcon}  /></a></button>
        <button><a href="#">Live <LuExternalLink className={styles.linkIcon}  /></a></button>
        </div>
      </div>
      <div className={styles.card} >
      <a href="https://github.com/SonuKumarPaswan/" target='_blank'>
        <div>
          <img src={productImage} alt="" />
        </div>
       
        <div className={styles.content}>
          <h2>Product-Management-System</h2>
          <p>This project is design using product api and including 50+ product in ...</p>
        </div>
        </a>
        <div>
        <button><a href="https://github.com/SonuKumarPaswan/">Github <LuExternalLink className={styles.linkIcon} /></a></button>
        <button><a href="#">Live <LuExternalLink className={styles.linkIcon} /></a></button>
        </div>
      </div>
      
       </div>
     
    </div>
  )
}

export default Project
