import React from 'react'
import styles from '../../styles/Comment.module.css'
import Tweet from '../home/tweet'
import SendTweet from '../home/sendTweet'
import CommentItem from './commentItem'

const CommentForm = ({commentSwitch, tweetInfo, like, letter, sendTweet}) => {
    const action = (content) => {
        // console.log(tweetInfo)
        sendTweet({ 
            tweetId:tweetInfo.id, 
            content
        })
    }
    return (
        <>
        <div onClick={commentSwitch} className={styles['comment-form-background']}>
        </div>
        <div className={styles['comment-form']}>
            <div className={styles['comment-form-scroll']}>
                <div className={styles['comment-form_top-section']}>
                    <div onClick={commentSwitch} className={styles['comment-form_top-section_exit_wrap']}>      
                        <div className={styles['comment-form_top-section_exit']}>      
                        </div>
                    </div>
                </div>
                <div className={styles['comment-form_tweet']}>
                    <Tweet tweetInfo={tweetInfo} like={(id)=>like(id)}/>
                </div>
                <SendTweet letter={letter} sendTweet={action}/>
                {tweetInfo.comment.map((item)=>
                <CommentItem key={item.username}  username={item.username} content={item.content}/>
                
                )}
            </div>
        </div>
        </>
    )
}

export default CommentForm
