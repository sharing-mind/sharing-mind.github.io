import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        Welcome Man! I am good to go with nextjs. 
      </header>

      <Link href='/about'>About Page</Link>
      <Link href='/posts'>Posts Page</Link>
      <Link href='/'>Home Page</Link>
    </div>
  )
}

export default Home
