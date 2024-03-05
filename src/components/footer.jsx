import React from 'react'
import styles from '../styles/footer.module.css'
import { FaLocationDot } from "react-icons/fa6";
import {FaPhone,FaDribbble,FaFacebookF,FaInstagram,FaCloud,FaTwitter,FaYoutube} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi2";
import Coffee from '../assets/coffee.jpg'
import Team from '../assets/team.jpg'
import Discussion from '../assets/discussion.jpg'
import Papers from '../assets/papers.jpg'
import Laptop from '../assets/laptop.jpg'
import Businesman from '../assets/businesman.jpg'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_text}>
      <div className={styles.about}>
        <h4>ABOUT HOOK</h4>
        <p>The Mahar sank now till only the long upper bill and eyes were exposed above.</p>
        <div className={styles.location}>
            <div className={styles.faicon}><FaLocationDot /></div>
            <div className={styles.location_text}>
                <p>River Street, Blue Building </p>
                <p>5690-970 New york City</p>
            </div>
        </div>
        <div className={styles.phone}>
            <div className={styles.faphone}><FaPhone /></div>
            <p>+ 1 234 567890</p>
        </div>
        <div className={styles.message}>
            <div className={styles.fill}><AiFillMessage /></div>
            <a href="# ">architecture@hook.com</a>
        </div>
      </div>
      <div className={styles.newsletter}>
        <h4>NEWSLETTER</h4>
        <p>Subscribe and stay updated with the latest news from us. We never spam!</p>
        <p className={styles.letter}>Are You Ready For Us?</p>
        <input type="text" placeholder='Enter Your Email' />
        <button>SIGN UP</button>
      </div>
      <div className={styles.connect}>
        <h4>GET CONNECTED</h4>
        <p>Now, the Pequod had sailed from Nantucket at the very beginning of the Season-on-the-Line.</p>
        <p>Possible endeavor then could enable her commander to make the great stuff inside.</p>
        <div className={styles.faicons}>
            <div className={styles.dribbble}><FaDribbble/></div>
            <div className={styles.facebook}><FaFacebookF /></div>
            <div className={styles.insta}><FaInstagram /></div>
            <div className={styles.cloud}><FaCloud /></div>
            <div className={styles.twitter}><FaTwitter /></div>
            <div className={styles.youtube}><FaYoutube /></div>
        </div>
      </div>
      <div>
        <h4>INSTAGRAM FEED</h4>
        <div className={styles.images}>
            <div className={styles.image_1}>
              <img src={Coffee} alt="Coffee" width='80px' height='70px'/>
            </div>
            <div className={styles.image_2}>
              <img src={Team} alt="Team" width='80px' height='70px'/>
            </div>
            <div className={styles.image_3}>
              <img src={Discussion} alt="Discussion" width='80px' height='70px'/>
            </div>
            <div className={styles.image_4}>
              <img src={Papers} alt="Papers" width='80px' height='70px'/>
            </div>
            <div className={styles.image_5}>
              <img src={Laptop} alt="Laptop" width='80px' height='70px'/>
            </div>
            <div className={styles.image_6}>
              <img src={Businesman} alt="Businesman" width='80px' height='70px'/>
            </div>
        </div>
      </div></div>

        <div className={styles.developed}>
            <p>Hook WordPress Theme</p>
            <p>Developed with Love & Pride by Pirenko.</p>
            <div className={styles.up}><a href="#home"><HiChevronUp/></a></div>
        </div>
        
    </div>
  )
}

export default Footer
