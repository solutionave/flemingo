import React from 'react'
import styles from './Hero.module.css'
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
const Hero = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.h1}>
                Analytics <span className={styles.colored}>made simple</span> for <br /> business & companies
            </h1>
            <span className={styles.subText}>A platform to find best creators for your sponsorships and advertisements.</span>
            <span className={styles.subText}>We serve analytics of hosts based on your preferences</span>
            <br />
            <br />
            <button className='Btn py-3 px-4'>Get Started</button>
            <br />
            <br />
            <br />
            <br />
            <span className={styles.subTextBlack}>Supported Sites</span>
            <br />
            <br />
            <div>
                <FaYoutube color='white' className={styles.icon} size={30} />
                <FaTwitter color='white' className={styles.icon} size={30} />
                <FaInstagram color='white' className={styles.icon} size={30} />
                <FaFacebook color='white' className={styles.icon} size={30} />
                <FaTiktok color='white' className={styles.icon} size={30} />
            </div>
        </div>
    )
}

export default Hero