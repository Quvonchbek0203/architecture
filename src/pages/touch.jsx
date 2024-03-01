import React from 'react'
import styles from '../styles/touch.module.css'
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { LuPencilRuler } from "react-icons/lu";
const Touch = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.touchh2}>
            <h2>We're All Ears</h2>
            <h1>GET IN TOUCH</h1>
            <p>It is some systematized exhibition of the whale in his broad genera, that I would now fain put before you. Yet is it no easy task. The classification of the constituents of a chaos, nothing less is here essayed.</p>
        </div>  

        <div className={styles.touch_icon}>
            <div className={styles.message}>
                <i><FaRegMessage /></i>
                <h3>Come And Meet Us</h3>
                <p>River Street, 1st. floor <br />5690-970 New york City</p>
            </div>
            <div className={styles.iphone}>
                <i><MdOutlinePhoneIphone /></i>
                <h3>Give Us A Call</h3>
                <p>+1 234 567 890</p>
            </div>
            <div className={styles.send}>
                <i><HiCode /></i>
                <h3>Send Us A Message</h3>
                <p>withlove@hook.com</p>
            </div>
            <div className={styles.something}>
                <i><LuPencilRuler /></i>
                <h3>Something Else</h3>
                <p>Feeling Really Well</p>
            </div>    
        </div>
    </div>
  )
}

export default Touch
