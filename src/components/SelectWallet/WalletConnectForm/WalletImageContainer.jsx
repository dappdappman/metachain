import React from 'react'
import styles from '../WalletConnectForm.module.css'

const WalletImageContainer = ({ walletLogo }) => {
  return (
    <div className={styles.imageContainer}>
        <img src={walletLogo} alt="wallet logo" className={styles.walletLogo} />
    </div>
  )
}

export default WalletImageContainer