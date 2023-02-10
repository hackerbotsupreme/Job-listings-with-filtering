import React from 'react'
import styles from './Navigation.module.scss'
import Container from '../Container/Container'


const Navigation = () => {
    return (
        <div className={styles.nav}>
            <header className={styles.header}>
            </header>
            <Container>
                <div className={styles.filter}>
                    <div className={styles.content}>
                        <p>Frontend</p>
                        <p>clear</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navigation