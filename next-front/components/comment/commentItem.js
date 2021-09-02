import React from 'react'
import styles from '../../styles/Comment.module.css'
import Avatar from '../home/avatar'

const CommentItem = ({username, content}) => {
    return (
        <div className={styles['comment-item']}>
            <div className={styles['comment-item_avatar']}>
                <Avatar letter={username[0].toLowerCase()}/>
            </div>
            <div className={styles['comment-item_content']}>
                <div className={styles['comment-item_content_info']}>
                <div className={styles['comment-item_content_info_title']}>
                    {username} 
                </div>
                <div onClick={()=>console.log(tweetInfo)} className={styles['comment-item_content_info_sub-title']}>
                    @{username.split(' ').join('').toLowerCase()}
                </div>
                </div>
                <div className={styles['comment-item_content_message']}>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default CommentItem
