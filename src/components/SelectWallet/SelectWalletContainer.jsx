import React, { useEffect, useState } from 'react';
import styles from './SelectWalletContainer.module.css';
import { GoDotFill } from 'react-icons/go';
import Logo from '../../assets/logo.png';
import SupportedData from '../../components/Home/SupportedData';
import WalletConnect from './WalletConnect';

const SelectWalletContainer = () => {

  const [walletName, setWalletName] = useState('');
  const [walletLogo, setWalletLogo] = useState();
  const [displayConnect, setDisplayConnect] = useState(false)


  return (
    <>
      {displayConnect && <WalletConnect walletName={walletName} walletLogo={walletLogo} setDisplayConnect={setDisplayConnect} />}
      <section className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>

        <section className={styles.inner}>
          <div className={styles.innerContainer}>
            {SupportedData.map(data => (
              <div
                key={data.id}
                className={styles.walletContainer}
                onClick={() => {
                  setWalletName(data.walletName)
                  setWalletLogo(data.walletLogo)
                  setDisplayConnect(true)
                  }}
              >
                <div className={styles.walletInfo}>
                  <p>
                    <span className={styles.dotIcon}><GoDotFill /></span>
                    <span className={styles.walletName}>{data.walletName}</span>
                  </p>
                </div>
                <div className={styles.walletImage}>
                  <img src={data.walletLogo} alt={data.walletName} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default SelectWalletContainer;
