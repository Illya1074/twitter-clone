import React from 'react'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

const SidebarItem = ({children, val}) => {
    const route = useRouter()
    const clickLink = (where) => {
        if(where === 'Home'){
            route.push(`/`)
        } else {
            route.push(`/${where.toLowerCase()}`)
        }
    }
    
    return (
        <div onClick={()=>clickLink(val)} className={styles['home_sidebar_list-items']}>
            <div className={styles['home_sidebar_list-items-wrapper']}>
                <div className={styles['home_sidebar_list-items_svg']}>
                    {children}
                </div>
                <div className={styles['home_sidebar_list-items_content']}>
                    {val}
                </div>
            </div>
        </div>
    )
}

export default SidebarItem
