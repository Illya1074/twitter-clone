import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {useRouter} from 'next/router'
import Sidebar from '../sidebar/sidebar'
import PropTypes from 'prop-types';
import styles from '../../styles/Home.module.css'


const Layout = ({children}) => {
    const state = useSelector(state => state.user)
    const [auth, setAuth] = useState(false);
    const route = useRouter()
    const letter = state.info !== undefined ? state.info.username[0].toUpperCase() : undefined
    useEffect(() => {
        // console.log(auth)
        if(state.jwt !== undefined && state.jwt !== ''){
            setAuth(true)
        } else {
            setAuth(false)
            route.push('/signin')
        }
        
    }, [state])
    return (
        <>
            {
                auth 
                ? 
                <div className={styles.container}>
                    <main className={styles.home}>
                        <Sidebar letter={letter}/>
                        {children}
                    </main>
                </div>
                :
                children
            }
        </>
    )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.obj,
};