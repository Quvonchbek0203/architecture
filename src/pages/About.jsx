import React from 'react'
import styles from '../styles/about.module.css'
import { HiChevronDown } from "react-icons/hi";

const About = () => {
  return (
    <div id="about">

        <div className={styles.header}>
            <h2>We Are Know For Our</h2>
            <h1 className='cd-headline rotate-1'>
            <span class="cd-words-wrapper">
                <b className='is-visible'>POTENTIAL</b>
            {/* <b>GREATNESS</b>
                <b>VERSATILITY</b>
                <b>EXPERTISE</b>
                <b>INSPIRATION</b>
                <b>CAPABILITY</b> */}
            </span>
            </h1>
        <div className={styles.btn}>
            <button className={styles.btn1}><p>LATEST WORK</p></button>
            <button className={styles.btn2}><p>GET IN TOUCH</p></button>
        </div>
            <div className={styles.down}><a href=" "><HiChevronDown /></a></div>
        </div>


        <div className={styles.aboutheader}>
            <div className={styles.abouth2}>
                <h2>Our Project & Vision</h2>
            </div>    
            <div className={styles.abouth1}>
                <h1>ABOUT OUR STUDIO</h1>
            </div>    
        </div>
        <div className={styles.aboutimage}>
            <div className={styles.alisa}></div>
            <div className={styles.abouttext}>
                <h3>BRINGING IDEAS TO LIFE</h3>
                <br /><hr /><br />
                <p>The more I dive into this matter of whaling, and push my researches up to the very spring-head of it so much the more am I impressed with its great honourableness and antiquity and especially when I find so many great demi-gods and heroes, prophets of all sorts or truly beautiful things to be seen.</p>
                <br />
                <p>Who one way or other have shed distinction upon it, I am transported with the reflection that I myself belong, though but subordinately, to so emblazoned a fraternity. Often and often, though this narrative must not be clogged by the details, was Granser tale interrupted while the boys squabbled.</p>
                <br />
                <p>But the pretty milkmaid was much too vexed to make any answer. She picked up the leg sulkily and led her cow away, the poor animal limping on three legs. As she left them the milkmaid cast many reproachful glances over her shoulder at the clumsy strangers holding her among themselves.</p>
                <br />
                <p className={styles.aboutimg}></p>
            </div>
        </div><br /><br />
    </div>
  )
}

export default About
