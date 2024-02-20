import React from "react";
import styles from "../styles/progress.module.css"

function ProgressBar () {
   return (
    <div className={styles.progress}>
       <div className={styles.container}>

           <div className={styles.skillBox}>
               <span className={styles.title}>BRANDING</span>
               <div className={styles.skillBar}>
                   <span className={styles.html}>
                       <span className={styles.tooltip}>80%</span>
                   </span>
               </div>
           </div>
           <div className={styles.skillBox}>
               <span className={styles.title}>VIDEO EDITION</span>
               <div className={styles.skillBar}>
                   <span className={styles.css}>
                       <span className={styles.tooltip}>90%</span>
                   </span>
               </div>
           </div>
           <div className={styles.skillBox}>
               <span className={styles.title}>E-COMMERCE</span>
               <div className={styles.skillBar}>
                   <span className={styles.javascript}>
                       <span className={styles.tooltip}>95%</span>
                   </span>
               </div>
           </div>
           <div className={styles.skillBox}>
               <span className={styles.title}>PHOTOGRAPHY</span>
               <div className={styles.skillBar}>
                   <span className={styles.nodejs}>
                       <span className={styles.tooltip}>75%</span>
                   </span>
               </div>
           </div>
           
       </div>
    </div>
   )
}

export default ProgressBar;