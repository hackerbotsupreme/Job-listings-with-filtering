import styles from './Container-style.module.scss'

import React from 'react'

const Container = ({ children }) => {
    return (
        <div className={styles.container_layout}>{children}</div>
    )
}

export default Container