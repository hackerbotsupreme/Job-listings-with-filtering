/* eslint-disable react/button-has-type */
import React, { useContext } from 'react'
import { JobsContext } from '../../Context/Job-list'
import styles from './Button.module.scss'

// eslint-disable-next-line react/prop-types
function Button({ children, Job }) {
  const { addFilterItem, filterJobs } = useContext(JobsContext)
  const itm = filterJobs.find((x) => x === Job)
  return (
    // eslint-disable-next-line react/no-unknown-property
    <button
      className={itm ? `${styles.itm} ${styles.btn}` : `${styles.btn}`}
      onClick={() => addFilterItem(Job)}
    >
      {children}
    </button>
  )
}

export default Button
