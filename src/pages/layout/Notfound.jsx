import React from 'react'
import style from './notfound.module.css'
import { BsEmojiAngryFill } from "react-icons/bs";

const Notfound = () => {
  return (
    <div className={style.notfound}>
      <h1><BsEmojiAngryFill /></h1>
      <h2>Page not found☠️</h2>
    </div>
  )
}

export default Notfound
