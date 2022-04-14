import Head from 'next/head'
import Image from 'next/image'
import Link  from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="products"><a>Productos</a></Link>
        </li>
        <li>
          <Link href="about"><a>Abut</a></Link>
        </li>
      </ul>
      <h1>Ola Mundo NextJs</h1>
    </div>
  )
}
