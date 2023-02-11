import React, { useContext } from 'react'
import { JobsContext } from '../../Context/Job-list'
import Button from '../Button'
import styles from './jobs.module.scss'



const Jobs = ({ jobs }) => {
    const { company, logo, New, featured, position, role, level, postedAt, contract, location, languages, tools } = jobs
   
    return (
        <div className={`${featured === true ? `${`${styles.JobS} ${styles.Jobs}`}` : styles.Jobs} `}>
            <div className={styles.first}>
                <img src={logo} alt="" className={styles.logo} />
                <div className={styles.jobInfo}>
                    <div className={styles.infoTop}>
                        <span className={styles.company}>{company}</span>
                        <div className={styles.spe}>
                            {New === true ? <button className={`${styles.special}`}>{`NEW!`}</button> : ''}
                            {featured === true ? <button className={`${styles.special} ${styles.specialAlt}`}>{`FEATURED`}</button> : ''}
                        </div>
                    </div>
                    <div className={styles.infoMiddle}>
                        <span>{position}</span>
                    </div>
                    <div className={styles.infoLast}>
                        <span className={styles.altInfo}>{postedAt} <div className={styles.de}></div></span>
                        <span className={styles.altInfo}>{contract} <div className={styles.de}></div></span>
                        <span>{location}</span>
                    </div>
                </div>
            </div>
            <div className={styles.horizontalRule}></div>
            <div className={styles.second}>
                <Button job={role}>{role}</Button>
                <Button job={level}>{level}</Button>
                {languages && languages.map((language, idx) => {
                    return (
                        <Button key={idx} job={language}>{language}</Button>
                    )
                })}
                {tools && tools.map((tool, idx) => {
                    return (
                        <Button key={idx} job={tool}>{tool}</Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Jobs