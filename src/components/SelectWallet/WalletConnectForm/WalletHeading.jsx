import React from 'react'
import styles from '../WalletConnectForm.module.css'

const WalletHeading = ({ walletName }) => {
  return (
    <div className={styles.walletHeading}>
        <p>Import your {walletName} {walletName.includes("Wallet") ? "" : " Wallet"} </p>
    </div>
  )
}

export default WalletHeading