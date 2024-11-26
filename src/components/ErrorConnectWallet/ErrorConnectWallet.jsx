import { Link } from 'react-router-dom'
import styles from './ErrorConnectWallet.module.css'
import Lottie from 'lottie-react'
import animationData from '../../assets/error/loading.json'

const ErrorConnectWallet = () => {
  return (
    <section className={styles.errorContainer}>
      <h1 className={styles.errorHeading}>
        Loading Account
      </h1>
      <div className={styles.animationContainer}>
        <Lottie animationData={animationData} loop={true} autoplay={true} className={styles.animation} />
      </div>
      <h1 className={styles.errorSubheading}>
        Please wait...
      </h1>
      <p className={styles.errorMessage}>
        If it takes too long, kindly restart the process as your credentials may be wrong
      </p>
      <Link className={styles.errorReturnButton} to={'/ecosystem'}>
        Restart
      </Link>
    </section>
  )
}

export default ErrorConnectWallet