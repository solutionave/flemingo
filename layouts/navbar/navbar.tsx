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
      </a> */}
      <button
        className="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className={styles.navbarItem}>
            <Link className={styles.navLink} href={"/features"}>
              Features
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navLink} href={"/pricing"}>
              Pricing
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navLink} href={"/testimonials"}>
              Testimonials
            </Link>
          </li>
          {/* <li className={styles.navbarItem}> */}
            {/* <button className="Btn">Login</button> */}
          {/* </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar