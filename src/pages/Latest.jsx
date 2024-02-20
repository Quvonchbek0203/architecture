import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/latest.module.css'
import { IoMdAlarm } from "react-icons/io";
import { HiMiniBeaker } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { BsClouds } from "react-icons/bs";
import Counter from '../components/Counter';

const Latest = () => {
  const [latest,setLatest] = useState(false)
    const lateref = useRef();
    const handleScroll = () => {
      const position = window.pageYOffset;
      if(position > lateref.current.offsetTop - 200){
        setLatest(true)
      }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div>

    <div className={styles.latest} ref={lateref}>

      <div className={styles.latest_text}>
        <h1>LATEST ACHIEVMENTS</h1>
        <p>The leading matter of it requires to be still further and more familiarly enlarged upon.</p>
        <p>Moreover to take away any incredulity which a profound expertise.</p>
      </div>

      <div className={styles.latest_table}>
        <div className={styles.latest_icon}>
          <div className={styles.icon}><IoMdAlarm /></div>
          <p className={styles.number}>
          <Counter startNum={latest ? 0 : 0} endNum={latest ? 876 : 0}/>
          </p>
          <h2>TIMELY DELIVERIES</h2>
        </div>
        
        <div className={styles.latest_icon}>
          <div className={styles.icon}><HiMiniBeaker /></div>
          <p className={styles.number}>
          <Counter startNum={latest ? 0 : 0} endNum={latest ? 876 : 0}/>
          </p>
          <h2>UNSOLVED MISTERIES</h2>
        </div>
        
        <div className={styles.latest_icon}>
          <div className={styles.icon}><FaRegHeart /></div>
          <p className={styles.number}>
          <Counter startNum={latest ? 0 : 0} endNum={latest ? 876 : 0}/>

          </p>
          <h2>BIG HEARBEATS</h2>
        </div>
                    
        <div className={styles.latest_icon}>
          <div className={styles.icon}><BsClouds /></div>
          <p className={styles.number}>
          <Counter startNum={latest ? 0 : 0} endNum={latest ? 876 : 0}/>

          </p>
          <h2>CLOUD WORKERS</h2>
        </div>
      </div>
    </div>

    <div className={styles.latest_our}>
        <h2>Recognized By Everyone</h2>
        <h1>OUR LATEST PROJECTS</h1>
        <p>It is some systematized exhibition of the whale in his broad genera, that I would now fain put before you. Yet is it  no easy task. The classification of the constituents of a chaos, nothing less is here essayed.</p>
    </div>
    </div>
  )
}

export default Latest
