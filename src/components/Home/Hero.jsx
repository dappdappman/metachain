import React from 'react';
import style from './Hero.module.css';
import HeroImg from '../../assets/hero.png'

const Hero = () => {
  return (
    <section className={style["heroSection"]}>
      <article className={style["heroArticle"]}>
        <h1 className={style["heroTitle"]}>Integrate mobile wallets with your DApps</h1>
        <p className={style["heroDescription"]}>DappsChainFortify is a blockchain-based protocol that enables users to link their mobile crypto wallets to DApps. This supports secure connections and interactions within the web3 ecosystem.</p>
      </article>
      <div className={style["heroImage"]}>
        <img src={HeroImg} alt="DappsChainFortify blockchain-based protocol" />
      </div>
    </section>
  );
};

export default Hero;
