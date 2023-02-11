/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react'
import styles from './Navigation.module.scss'
import Container from '../Container/Container'
import { JobsContext } from '../../Context/Job-list'
import icon from '../../assets/images/icon-remove.svg'

function Navigation() {
  const { filterJobs, removeItem, clearAll } = useContext(JobsContext)
  return (
    <div className={styles.nav}>
      <header className={styles.header} />
      <Container>
        {filterJobs.length > 0 && (
          <div className={styles.filter}>
            <div className={styles.content}>
              {filterJobs &&
                filterJobs.map((jobs, idx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div className={styles.jobs} key={idx}>
                    <div className={styles.jobName}>{jobs}</div>
                    <img
                      className={styles.icon}
                      src={icon}
                      alt="icon"
                      onClick={() => removeItem(jobs)}
                    />
                  </div>
                ))}
            </div>
            {filterJobs.length > 0 && (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <p className={styles.clear} onClick={() => clearAll()}>
                Clear
              </p>
            )}
          </div>
        )}
      </Container>
    </div>
  )
}

export default Navigation
