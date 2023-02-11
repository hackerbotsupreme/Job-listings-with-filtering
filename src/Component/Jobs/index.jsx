import React from 'react'
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
                <button>{role}</button>
                <button>{level}</button>
                {languages && languages.map((language, idx) => {
                    return (
                        <button key={idx}>{language}</button>
                    )
                })}
                {tools && tools.map((tool, idx) => {
                    return (
                        <button key={idx}>{tool}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Jobs