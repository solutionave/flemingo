import React from 'react'
import styles from './Section2.module.css'
function Section2() {
  return (
    <div className={styles.row}>
      <div className={styles.col50}>
        <div className={styles.title}>
          What do we do ?
        </div>
        <div className={styles.subtitle}>
          We Provide a simple solutions for the companies & business to find best person <br />
          or content creator to advertise their projects in social sites. We support <br />
          multiple platform like facebook, instagram, youtube & ticktok.
        </div>
      </div>
      <div className={styles.col50}>
        images
      </div>
    </div>
  )
}

export default Section2