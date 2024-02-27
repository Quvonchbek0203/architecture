import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo.png"
import { FaInstagram,FaLastfm,FaBars,FaDribbble,FaXing } from "react-icons/fa";
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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#work">Our Work</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#contact">Contact Us</a></li>
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
    </div>
  )
}

export default Navbar