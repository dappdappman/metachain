import React from 'react';
import style from './Hero.module.css';
import { useNavigate } from 'react-router-dom'
// import HeroImg from '../../assets/hero.png'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className={style["heroSection"]}>
      <article className={style["heroArticle"]}>
        <h1 className={style["heroTitle"]}>Seamlessly Connect Mobile <span> Wallets to  DApps</span></h1>
        <p className={style["heroDescription"]}>MetachainDapps is a blockchain-based protocol that enables users to link their mobile crypto wallets to DApps. 
        This supports secure connections and interactions within the web3 ecosystem.
        </p>
        <button
            onClick={() => navigate('/ecosystem')}
            className={style["connect-button"]}
          >
            Connect
          </button>
      </article>
    </section>
  );
};

export default Hero;
