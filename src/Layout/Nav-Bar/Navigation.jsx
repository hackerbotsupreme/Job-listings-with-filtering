import React, { useContext } from 'react'
import styles from './Navigation.module.scss'
import Container from '../Container/Container'
import { JobsContext } from '../../Context/Job-list'
import icon from '../../assets/images/icon-remove.svg'


const Navigation = () => {
    const { filterJobs } = useContext(JobsContext)
    return (
        <div className={styles.nav}>
            <header className={styles.header}>
            </header>
            <Container>
                {
                    filterJobs.length > 0 && <div className={styles.filter}>
                        <div className={styles.content}>
                            {
                                filterJobs && filterJobs.map((jobs, idx) => {
                                    return (
                                        <div className={styles.jobs} key={idx}>
                                            <div className={styles.jobName}>{jobs}</div> <img className={styles.icon} src={icon} alt="icon" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {filterJobs.length > 0 && <p>clear</p>}
                    </div>
                }
            </Container>
        </div>
    )
}

export default Navigation