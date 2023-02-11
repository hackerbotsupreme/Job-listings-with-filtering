/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../Button'
import styles from './jobs.module.scss'

function Jobs({ jobs }) {
  const {
    company,
    logo,
    New,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = jobs

  return (
    <div
      className={`${
        featured === true ? `${`${styles.JobS} ${styles.Jobs}`}` : styles.Jobs
      } `}
    >
      <div className={styles.first}>
        <img src={logo} alt="" className={styles.logo} />
        <div className={styles.jobInfo}>
          <div className={styles.infoTop}>
            <span className={styles.company}>{company}</span>
            <div className={styles.spe}>
              {New === true ? (
                <button className={`${styles.special}`}>NEW!</button>
              ) : (
                ''
              )}
              {featured === true ? (
                <button className={`${styles.special} ${styles.specialAlt}`}>
                  FEATURED
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className={styles.infoMiddle}>
            <span>{position}</span>
          </div>
          <div className={styles.infoLast}>
            <span className={styles.altInfo}>
              {postedAt} <div className={styles.de} />
            </span>
            <span className={styles.altInfo}>
              {contract} <div className={styles.de} />
            </span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className={styles.horizontalRule} />
      <div className={styles.second}>
        <Button job={role}>{role}</Button>
        <Button job={level}>{level}</Button>
        {languages &&
          languages.map((language, idx) => {
            return (
              <Button key={idx} job={language}>
                {language}
              </Button>
            )
          })}
        {tools &&
          tools.map((tool, idx) => {
            return (
              <Button key={idx} job={tool}>
                {tool}
              </Button>
            )
          })}
      </div>
    </div>
  )
}

export default Jobs
