import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {useRouter} from 'next/router'
import Sidebar from '../sidebar/sidebar'
import styles from '../../styles/Home.module.css'


const Layout = (props) => {
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
                        {props.children}
                    </main>
                </div>
                :
                props.children
            }
        </>
    )
}

export default Layout
