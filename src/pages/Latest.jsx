import React from 'react'
import styles from '../styles/latest.module.css'
import { IoMdAlarm } from "react-icons/io";
import { HiMiniBeaker } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { BsClouds } from "react-icons/bs";

const Latest = () => {
  return (
    <div className={styles.latest}>
      <div>
        <h1>LATEST ACHIEVMENTS</h1>
        <p>The leading matter of it requires to be still further and more familiarly enlarged upon.</p>
        <p>Moreover to take away any incredulity which a profound expertise.</p>
      </div>
      <div>
        <table>
            <tr>
                <td>
                    <div>
                        <div><IoMdAlarm /></div>
                        <p>945</p>
                        <h1>TIMELY DELIVERIES</h1>
                    </div>
                </td>
                <td>
                    <div>
                        <div><HiMiniBeaker /></div>
                        <p>0</p>
                        <h1>UNSOLVED MISTERIES</h1>
                    </div>
                </td>
                <td>
                    <div>
                        <div><FaRegHeart /></div>
                        <p>980</p>
                        <h1>BIG HEARBEATS</h1>
                    </div>
                </td>
                <td>
                    <div>
                        <div><BsClouds /></div>
                        <p>876</p>
                        <h1>CLOUD WORKERS</h1>
                    </div>
                </td>
            </tr>
        </table>
      </div>
    </div>
  )
}

export default Latest
