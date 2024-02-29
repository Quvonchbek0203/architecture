import React from 'react'
import styles from "../styles/home.module.css"

const Map = () => {
  return (
    <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18939.21631420046!2d65.77865346351095!3d38.83305721512269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea9b07949d01b%3A0xaec531ebc8211818!2sQarMII%20Iqtisodiyot%20fakulteti!5e1!3m2!1sru!2s!4v1709189975551!5m2!1sru!2s" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map
