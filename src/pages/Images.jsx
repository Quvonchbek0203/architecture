import React from 'react'
import styles from '../styles/images.module.css'
import Flat from '../assets/flat.jpg'
import View from '../assets/view.jpg'
import "../App.css"
const Images = () => {
  return (
  <div className={styles.images} >
    <div className={styles.flat} id='text'>
      <img src={Flat} alt="Flat" width='100%'/>
      <div className={styles.text}>
        <h1>ROBINSON FLAT</h1>
        <p>Cool Apartment,Great Views</p>
      </div>
    </div>
    <div className={styles.views} id='text'>
      <img src={View} alt="View"  width='100%'/>
      <div className={styles.text}>
        <h1>RED VIEWS</h1>
        <p>An Unusual Approach</p>
      </div>
    </div>
    <div className={styles.higher} id='text'>
      <div className={styles.text}>
        <h1>HIGHER PENTHOUSE</h1>
        <p>Great Market Value</p>
      </div>
    </div>
    <div className={styles.bay} id='text'>
      <div className={styles.text}>
        <h1>SOUTH BAY OFFICE</h1>
        <p>All-Around Workspace</p>
      </div>
    </div>
    <div className={styles.villa} id='text'>
      <div className={styles.text}>
        <h1>RENAISSANCE VILLA</h1>
        <p>TimelessArchitecture</p>
      </div>
    </div>
    <div className={styles.garden} id='text'>
      <div className={styles.text}>
        <h1>TOUCH GARDEN</h1>
        <p>A Vibrant Building</p>
      </div>
    </div>
    <div className={styles.golden} id='text'>
      <div className={styles.text}>
        <h1>GOLDEN HOUSE</h1>
        <p>Heard Of San Francisco</p>
      </div>
    </div>
  </div>
  )
}

export default Images
