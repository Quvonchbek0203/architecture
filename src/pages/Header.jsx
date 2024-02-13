import React from 'react'

const Header = () => {
  return (
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
  )
}

export default Header
