import React from 'react'
import styles from '../../styles/Home.module.css'

const sidebarWrapper = (props) => {
    return (
        <div className={styles['home_sidebar']}>
            {props.children}
        </div>
    )
}

export default sidebarWrapper
