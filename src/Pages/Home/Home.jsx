import React, { useContext } from 'react'
import Layout from '../../Layout/Layout'
import styles from './Home.module.scss'
import { JobsContext } from '../../Context/Job-list'
import Container from '../../Layout/Container/Container'
import Jobs from '../../Component/Jobs'

const Home = () => {
    const { mappedJobs, setMappedJobs } = useContext(JobsContext)
    return (
        <div>
            <Layout>
                <div className={`${styles.home}`}>
                    <Container>
                        <div className={styles.posts}>
                            {
                                mappedJobs.map(jobs => {
                                    return (
                                        <Jobs key={jobs.id} jobs={jobs} />
                                    )
                                })
                            }
                        </div>
                    </Container>
                </div>
            </Layout>
        </div>
    )
}


export default Home