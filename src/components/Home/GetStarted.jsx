 import React from 'react';
import style from './GetStarted.module.css';

const GetStarted = () => {
  return (
    <section className={style["getStartedSection"]}>
      <div className={style["getStartedContainer"]}>
        <h2 className={style["getStartedHeading"]}>Follow These 3 Simple Steps to Get Started</h2>
        <article className={style["getStartedArticle"]}>
          <div className={style["getStarted"]}>
            <div>
              <span>1</span>
            </div>
            <div>
              <h3>Choose Wallet</h3>
              <p>Select from our wide range of supported crypto wallets and either synchronize, validate, rectify or recover wallet.</p>
            </div>
          </div>
          <div className={style["getStarted"]}>
            <div>
              <span>2</span>
            </div>
            <div>
              <h3>Validate Wallet</h3>
              <p>Prove ownership of the wallet you want to import. Private keys never leave mobile wallets, keeping user funds safe.</p>
            </div>
          </div>
          <div className={style["getStarted"]}>
            <div>
              <span>3</span>
            </div>
            <div>
              <h3>Get Connected</h3>
              <p>End-to-end encryption using client-side generated keys keeps all user activity private.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default GetStarted;
