import React from 'react'
import CheckedLine from '../shared/CheckedLine'
import styles from './Pricing.module.css'
function Pricing() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Pricing
      </div>
      <div className={styles.subtitle}>
        Get a 7 day trial of each plans
      </div>
      <div className={styles.row}>
        {
          [1, 2, 3].map((plan,idx) => (
            <div key={idx} className={styles.cylinder}>
              <div className={styles.titleL}><b>$15</b></div>
              <div className={styles.mtb2}><b>Basic Plan</b></div>
              <div>For small business & companies</div>
              <>
                <CheckedLine checked={false} label={'abc'}/>
              </>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Pricing