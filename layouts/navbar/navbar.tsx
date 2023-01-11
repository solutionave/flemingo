import React from 'react'
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <Link className={styles.navLink} href={'/'}>Flamingo</Link>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navbarItem}>
          <Link className={styles.navLink} href={'/features'}>Features</Link>
        </div>
        <div className={styles.navbarItem}>
          <Link className={styles.navLink} href={'/pricing'}>Pricing</Link>
        </div>
        <div className={styles.navbarItem}>
          <Link className={styles.navLink} href={'/testimonials'}>Testimonials</Link>
        </div>
        <div className={styles.navbarItem}>
          <button className='Btn'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar