import { Link } from 'react-router-dom'
import styles from './ErrorConnectWallet.module.css'
import Lottie from 'lottie-react'
import animationData from '../../assets/error/caution.json'

const ErrorConnectWallet = () => {
  return (
    <section className={styles.errorContainer}>
      <div className={styles.animationContainer}>
        <Lottie animationData={animationData} loop={true} autoplay={true} className={styles.animation} />
      </div>
      <h1 className={styles.errorHeading}>Wallet Connection Failed!</h1>
      <p className={styles.errorMessage}>Please submit an active wallet.</p>
      <Link className={styles.errorReturnButton} to={'/ecosystem'} >Reconnect</Link>
    </section>
  )
}

export default ErrorConnectWallet