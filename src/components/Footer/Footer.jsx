import React from 'react'
import style from './Footer.module.css'
import { FaDiscord, FaInstagram, FaYoutube  } from "react-icons/fa";

const Footer = () => {
  return (
        <div className={style.footer_container}>
            <div className={`container ${style.main_container}`}>
                <div className={style.footer_about}>
                    <h3 className={style.footer_text}>SKY STORE</h3>
                    <p className={style.footer_text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
                <div className={style.footer_subscribe}>
                    <h3 className={style.footer_text}>Subscribe to get important updates</h3>
                    
                    <form onSubmit={(e)=>e.preventDefault()} className={style.footer_subscribe_form}>
                        <input type="email" name="email" placeholder="YOUR E-MAIL" />

                        <input type="submit" value="subscribe" />
                    </form>
                </div>
                <div className={style.footer_social}>
                    <h3 className={style.footer_text}>Follow Us</h3>
                    <div className={style.footer_social_icons}>
                    <div>
                        <FaDiscord className={style.icons} />
                    </div>
                    <div>
                        <FaInstagram className={style.icons} />
                    </div>
                    <div>
                        <FaYoutube className={style.icons} />
                    </div>
                    </div>
                </div>
                <div className={style.footer_contact}>
                    <h3 className={style.footer_text}>Call Us</h3>
                    <h3 className={style.footer_text}>+91 12345678978</h3>
                </div>
            </div>
        </div>
  )
}

export default Footer
