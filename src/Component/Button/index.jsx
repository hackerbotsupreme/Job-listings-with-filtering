import React, { useContext } from 'react'
import { JobsContext } from '../../Context/Job-list'
import styles from './button.module.scss'


const Button = ({ children, job }) => {
    const { addFilterItem } = useContext(JobsContext)
    return (
        <button className={styles.btn} onClick={() => addFilterItem(job)} job={job}>{children}</button>
    )
}

export default Button