import React from 'react'
import styles from './Section1.module.css'
function Section1() {
  return (
    <div className={styles.row}>
      <div className={styles.col50}>
        images
      </div>
      <div className={styles.col50}>
        <div className={styles.title}>
          Let us find the best creators for you
        </div>
        <div className={styles.subtitle}>
          More than 600+ content creators from youtube, 1000+ users from <br />
          instagram & 2000+ users from facebook have joined till now.
        </div>
      </div>
    </div>
  )
}

export default Section1