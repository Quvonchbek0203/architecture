import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/gif.module.css'
import ProgressBar from '../components/ProgressBar'

const Gif = () => {
    const [count,setCount] = useState(false)
    const lateref = useRef();
    const handleScroll = () => {
      const position = window.pageYOffset;
      if(position > lateref.current.offsetTop - 200){
        setCount(true)
      }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div className={styles.gifes} ref={lateref}>
        
        <div className={styles.gif}>
            <b>WE ARE MULTIFACETED AND GIFTED</b><br />
            <br /><hr /><br />
            <p>At the base of the mainmast, full beneath the doubloon and the flame, the Parsee was kneeling in Ahab’s front, but with his head bowed away from him while near by but not yet have we solved the incantation of this whiteness, and learned why it appeals with such power.</p><br />
            <p>From the arched and overhanging rigging, where they had just been engaged securing a spar, a number of the seamen, arrested by the glare, now cohered together, and hung pendulous, like a knot of numbed wasps from a drooping big and swirly thing.</p>
        </div>

        <div className={styles.percent}>
        {count ?  <ProgressBar/> : ""}
            {/* <div className={styles.brading}>
                <b>BRANDING</b>
                <b className={styles.brands}>80%</b>
            </div>
            <div className={styles.foiz}>
                <div className={styles.brand}></div>
            </div><br />
            <div className={styles.edition}>
                <b>VIDEO EDITION</b>
                <b className={styles.edits}>90%</b>
            </div>
            <div className={styles.foiz}>
                <div className={styles.edit}></div>
            </div><br />
            <div className={styles.commerce}>
                <b>E-COMMERCE</b>
                <b className={styles.commers}>95%</b>
            </div>
            <div className={styles.foiz}>
                <div className={styles.commer}></div>
            </div><br />
            <div className={styles.photography}>
                <b>PHOTOGRAPHY</b>
                <b className={styles.photos}>75%</b>
            </div>
            <div className={styles.foiz}>
                <div className={styles.photo}></div>
            </div> */}
        </div>     
    </div>
  )
}

export default Gif
