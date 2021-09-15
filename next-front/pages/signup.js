import styles from '../styles/Auth.module.css'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { signup } from '../redux/reducers/userReducer'
import { useRouter } from 'next/router'
import store from '../redux/store'

// import Image from 'next/image'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter();
  

  const signUp = () => {

    store.dispatch(signup({
      username: username,
      password: password,
      email: email
    }))
    router.push('/signin')
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/twitter.png" />
      </Head>
      <main className={styles['auth_main']}>
        <div className={styles['auth-image-side']}>
          <div className={styles['svg_chirp']}>
            <Image src="/twitter.svg"  height={330} width={330} />
          </div>
          <div className={styles['auth-image']}>
          </div>
        </div>
        
        <div className={styles['auth-content-side']}>
          <div>
            <Image src="/twitter2.svg"  height={42} width={42} />
          </div>
          <h2 className={styles['auth-content-side_title']}>
            Happening now
          </h2>
          <h3 className={styles['auth-content-side_sub-title']}>
            Join Twitter today. 
          </h3>
          <form className={styles['auth-form']}>
            <label className={styles['auth-label']} htmlFor="username">Username</label>
            <input onChange={(e) => setUsername(e.target.value)} value={username} className={styles['auth-input']} type="text" id="username" name="username" placeholder="Your name.." />
            <label className={styles['auth-label']} htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className={styles['auth-input']} type="text" id="email" name="email" placeholder="Your last name.." />
            <label className={styles['auth-label']} htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className={styles['auth-input']} type="password" id="password" name="password" placeholder="Your password.." />
          </form>
          <button  onClick={signUp} className={styles['auth-submit']} defaultValue="Submit">Submit</button>
          <div className={styles['auth-policy']}>
            By signing up, you agree to the <span className={styles['auth-policy-span']}>Terms of Service</span> and <span className={styles['auth-policy-span']}>Privacy Policy</span>, including <span className={styles['auth-policy-span']}>Cookie Use</span>.
          </div>
          <div className={styles['auth-oposite-auth']}>
            Already have an account? <span onClick={()=>router.push('/signin')} className={styles['auth-oposite-auth-span']}>Log in</span>
          </div>
        </div>
      </main>
    </div>
  )
}
