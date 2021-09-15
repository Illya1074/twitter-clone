import React from 'react'
import styles from '../../styles/Home.module.css'
import Avatar from '../home/avatar'
import PropTypes from 'prop-types';

const UserInfo = ({letter, username, id, setUserInfo}) => {
    return (
        <div onClick={()=> setUserInfo({
            id: id,
            username: username
        })} className={styles['home_sidebar_footer']}>
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
UserInfo.propTypes = {
  letter: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.number,
  setUserInfo: PropTypes.func,
};