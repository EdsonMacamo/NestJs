import Navbar  from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <h1>Ola Mundo NextJs</h1>
    </div>
  )
}
