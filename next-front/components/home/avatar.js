import React from 'react'
import styles from '../../styles/Home.module.css'

const Avatar = ({letter}) => {
    const myLetter = letter ? letter : ''
    return (
        <div className={styles['home_content-ection_send_tweet-section-avatar']}>
            <div className={styles['home_content-ection_send_tweet-section-avatar_letter']}>
                {myLetter}
            </div>
            <div className={styles['home_content-ection_send_tweet-section-avatar-black']}>   
            </div>
        </div>
    )
}

export default Avatar
