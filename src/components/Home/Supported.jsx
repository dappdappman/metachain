import React from 'react'
import style from './Supported.module.css';
import SupportedData from './SupportedData';

const Supported = () => {
  return (
    <section className={style["wallet-support"]}>
        <h2 className={style["wallet-support-heading"]}>Supported Wallets</h2>
        <p className={style["wallet-support-text"]}>DappsHub enables seamless integration of your wallet with an extensive collection of applications, unlocking a multitude of web3 opportunities.</p>
        <section className={style["wallet-container"]}>
            {
                SupportedData.map(data => (
                    <a key={data.id} href={data.walletAddress} target='blank' className={style["wallet-link"]}>
                        <div className={style["wallet-logo"]}>
                            <img src={data.walletLogo} alt={data.walletName} />
                        </div>
                        <span className={style["wallet-text"]}>{data.walletName}</span>
                    </a>        
                ))
            }
        </section>
    </section>
  )
}

export default Supported