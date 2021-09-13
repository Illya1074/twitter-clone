import React from 'react'
import styles from '../../styles/Home.module.css'
import Avatar from '../home/avatar'

const UserInfo = ({letter, username, id, setId}) => {
    return (
        <div onClick={()=> setId(id)} className={styles['home_sidebar_footer']}>
            <Avatar letter={letter}/>
            <div className={styles['home_sidebar_footer-info']}>
            <div className={styles['home_sidebar_footer-info_username']}>
                {username || ''}
            </div>
            <div className={styles['home_sidebar_footer-info_hashname']}>
                @{username ? username.toLowerCase() : ''}
            </div>
            </div>
        </div>
    )
}

export default UserInfo
