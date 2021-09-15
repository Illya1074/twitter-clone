import React from 'react';
import styles from '../../styles/Home.module.css';
import PropTypes from 'prop-types';

const ContentWrapper = ({children}) => {
    return (
        <div className={styles['home_content-section']}>
            {children}
        </div>
    )
}

export default ContentWrapper
ContentWrapper.propTypes = {
  children: PropTypes.obj,
};