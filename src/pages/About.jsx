import React from 'react'
import styles from '../styles/about.module.css' 

const About = () => {
  return (
    <div id="about">
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
        <div className={styles.gif}>
            <b>WE ARE MULTIFACETED AND GIFTED</b>
            <br /><hr /><br />
            <p>At the base of the mainmast, full beneath the doubloon and the flame, the Parsee was kneeling in Ahab’s front, but with his head bowed away from him while near by but not yet have we solved the incantation of this whiteness, and learned why it appeals with such power.</p><br />
            <p>From the arched and overhanging rigging, where they had just been engaged securing a spar, a number of the seamen, arrested by the glare, now cohered together, and hung pendulous, like a knot of numbed wasps from a drooping big and swirly thing.</p>
        </div>
        <div className={styles.percent}>
            <div className={styles.brading}>
                <b>BRANDING</b>
                <b>80%</b>
            </div>
            <div className={styles.brand}></div>
            <div className={styles.edition}>
                <b>VIDEO EDITION</b>
                <b>90%</b>
            </div>
            <div className={styles.edit}></div>
            <div className={styles.commerce}>
                <b>E-COMMERCE</b>
                <b>95%</b>
            </div>
            <div className={styles.commer}></div>
            <div className={styles.photography}>
                <b>PHOTOGRAPHY</b>
                <b>75%</b>
            </div>
            <div className={styles.photo}></div>
        </div>     
    </div>
  )
}

export default About
