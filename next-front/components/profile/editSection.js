import React from 'react'
import styles from '../../styles/Profile.module.css'
import ContentEditable from 'react-contenteditable'
import PropTypes from 'prop-types';

const EditSection = ({textUsername,textBio,textLoc,setEditSec,updateProfile}) => {

    return (
        <div className={styles['editable-section_background']}>
          <div className={styles['editable-section_top-bar']}>
            <div className={styles['editable-section_top-bar_left']}>
              <div onClick={setEditSec} className={styles['editable-section_top-bar_exit_wrapper']}>
                <div className={styles['editable-section_top-bar_exit']}>
              </div>
              </div>
              <div className={styles['editable-section_top-bar_edit-title']}>
                Edit Profile
              </div>
            </div>
            <div className={styles['editable-section_top-bar_right']}>
              <div onClick={updateProfile} className={styles['editable-section_top-bar_save-button']}>
                  Save
              </div>
            </div>
          </div>
          <div className={styles['editable-section_background-scroll']}>
            <div className={styles['profile_content-section_background']}>
            </div>
            <div className={styles['profile_content-section_logo']}>
              <div className={styles['profile_content-section_logo-black']}>
              </div>
            </div>
            <div className={styles['editable-section_input-items']}>
              <div className={styles['editable-section_input-item']}>
                <div className={styles['editable-section_input-title']}>Name</div>
                <ContentEditable className={styles['editable-section_input-little']} html={textUsername.current} 
                  onChange={(evt)=>textUsername.current = evt.target.value} />          
              </div>
              <div className={styles['editable-section_input-item']}>
                <div className={styles['editable-section_input-title']}>Bio</div>
                <ContentEditable className={styles['editable-section_input-big']} html={textBio.current} 
                  onChange={(evt)=>textBio.current = evt.target.value} />          
              </div>
              <div className={styles['editable-section_input-item']}>
                <div className={styles['editable-section_input-title']}>Location</div>
                <ContentEditable className={styles['editable-section_input-little']} html={textLoc.current}
                  onChange={(evt)=>textLoc.current = evt.target.value} />          
              </div>
            </div>
          </div>
        </div>
    )
}

export default EditSection
EditSection.propTypes = {
  textUsername: PropTypes.string,
  textBio: PropTypes.string,
  textLoc: PropTypes.string,
  setEditSec: PropTypes.func,
  updateProfile: PropTypes.func,
};