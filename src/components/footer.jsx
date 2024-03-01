import React from 'react'
import styles from '../styles/footer.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_text}>
      <div className={styles.about}>
        <h3>ABOUT HOOK</h3>
        <p>The Mahar sank now till only the long upper bill and eyes were exposed above.</p>
        <div className={styles.location}>
            <div className={styles.faicon}><FaLocationDot /></div>
            <div className={styles.location_text}>
                <p>River Street, Blue Building </p>
                <p>5690-970 New york City</p>
            </div>
        </div>
        <div className={styles.phone}>
            <FaPhone />
            <p>+ 1 234 567890</p>
        </div>
        <div className={styles.message}>
            <AiFillMessage />
            <a href="# ">architecture@hook.com</a>
        </div>
      </div>
      <div className={styles.newsletter}>
        <h3>NEWSLETTER</h3>
        <p>Subscribe and stay updated with the latest news from us. We never spam!</p>
        <p className={styles.letter}>Are You Ready For Us?</p>
        <input type="text" placeholder='Enter Your Email' className={styles.input}/>
        <button>SIGN UP</button>
      </div>
      <div>
        <h3>GET CONNECTED</h3>
        <p>Now, the Pequod had sailed from Nantucket at the very beginning of the Season-on-the-Line.</p>
        <p>Possible endeavor then could enable her commander to make the great stuff inside.</p>
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
      <div>
        <h3>INSTAGRAM FEED</h3>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div></div>

        <div className={styles.developed}>
            <p>Hook WordPress Theme</p>
            <p>Developed with Love & Pride by Pirenko.</p>
        </div>
    </div>
  )
}

export default Footer
