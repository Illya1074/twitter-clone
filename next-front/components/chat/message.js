import React from 'react'
import styles from '../../styles/Chat.module.css'

const Message = ({text, position}) => {
    // console.log(position)
    return (
        <div className={styles[`chat_messages-sec_content-message-${position}`]}>
            <div className={styles[`chat_messages-sec_content-message-${position}_text`]}>
                {text}
            </div>
        </div>
    )
}

export default Message
