import Logo from '../../assets/logo.png'
import React from 'react'
import styles from './ErrorConnectWallet.module.css'
import Lottie from 'lottie-react'
import animationData from '../../assets/error/caution.json'
import { Link } from 'react-router-dom'

const ErrorConnectWallet = () => {
  return (
    <section className={styles.errorContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.animationContainer}>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className={styles.animation}
        />
      </div>
      <h1 className={styles.errorHeading}>Wallet Connection Error!!!</h1>
      <p className={styles.errorMessage}>Ensure you submit an active wallet.</p>
      <Link className={styles.errorReturnButton} to={'/'} >Return</Link>
    </section>
  )
}

export default ErrorConnectWallet
