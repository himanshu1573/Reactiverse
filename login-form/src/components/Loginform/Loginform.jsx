import React from 'react'
import styles from './Loginform.module.css'
import { FaUser,FaLock } from "react-icons/fa";

export default function Loginform() {
  return (
    <div className={styles.wrapper}>
<form action="">
  <h1>Login</h1>
  <div className={styles.inputbox}>
    <input type="text" placeholder='username' required/>
    <FaUser className={styles.icon} />
  </div>
  <div className={styles.inputbox}>
    <input type="password" placeholder='username' required/>
    <FaLock className={styles.icon} />
  </div>
  <div className={styles.rememberforget}>
    <label><input type="checkbox" />Remember me</label>
    <a href="#">Forget Password ?</a>
    
    </div>
    <button type='submit'>Login</button>
    <div className={styles.registerlink}>
        <p>Don't have an account ? <a href="#">Register</a></p>
    </div>
  
  </form>
  </div>
  )
}
