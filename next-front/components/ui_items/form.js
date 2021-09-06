import React from 'react'
import styles from '../../styles/UI.module.css'

const Form = ({exitForm, form, children}) => {
    return (
        <>
        {form ? 
        <div className={styles['ui-form']}> 
            <div className={styles['ui-form_section_top-bar']}>
                <div className={styles['ui-form_section_top-bar_left']}>
                    <div onClick={exitForm} className={styles['ui-form_top-bar_exit_wrapper']}>
                        <div className={styles['ui-form_top-bar_exit']}>
                        </div>
                    </div>
                    <div className={styles['ui-form_section_top-bar_edit-title']}>
                        Edit Profile
                    </div>
                </div>
                <div className={styles['editable-section_top-bar_right']}>
                    
                </div>
            </div>
            {
                children
            }
        </div> : null}
        </>
    )
}

export default Form
