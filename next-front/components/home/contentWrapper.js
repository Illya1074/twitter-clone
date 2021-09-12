import React from 'react';
import styles from '../../styles/Home.module.css';

const ContentWrapper = (props) => {
    return (
        <div className={styles['home_content-section']}>
            {props.children}
        </div>
    )
}

export default ContentWrapper
