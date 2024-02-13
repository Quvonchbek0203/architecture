import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo.png"
import { FaInstagram,FaLastfm,FaBars,FaDribbble,FaXing } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import styles from "../styles/navbar.module.css"

const Navbar = () => {
  const [toggle,setToggle] = useState(true)
  const [scroll,setScroll] = useState(true)

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    if(scrollPosition > 500){
      setScroll(true)
    }
    else{
      setScroll(false)
    }
}; 

useEffect(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);

  return (
    <div className={styles.nav}>
      <div className={scroll ? styles.navbar : styles.navbarScroll}>

      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>

      <div className={toggle ? styles.navItems : styles.toggle}>
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="about">About Us</a></li>
          <li><a href="work">Our Work</a></li>
          <li><a href="service">Service</a></li>
          <li><a href="team">Our Team</a></li>
          <li><a href="contact">Contact Us</a></li>
        </ul>
        
      </div>

      <div className={styles.icon}>
        <div><a href="# "><FaLastfm /></a></div>
        <div><a href="# "><FaDribbble /></a></div>
        <div><a href="# "><FaInstagram /></a></div>
        <div><a href="# "><FaXing /></a></div>
        <i className={styles.bar} onClick={()=>setToggle(!toggle)}><FaBars/></i>
      </div>
      </div>

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

    </div>
  )
}

export default Navbar