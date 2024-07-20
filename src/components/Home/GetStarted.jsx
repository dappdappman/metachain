 import React from 'react';
import style from './GetStarted.module.css';

const GetStarted = () => {
  return (
    <section className={style["getStartedSection"]}>
      <div className={style["getStartedContainer"]}>
        <h2 className={style["getStartedHeading"]}>3 Simple Steps to <span> Get Started</span></h2>
        <article className={style["getStartedArticle"]}>
          <div className={style["getStarted"]}>
            <div>
              <span>1</span>
            </div>
            <div>
              <h3>Select Wallet</h3>
              <p>Pick from our extensive list of supported crypto wallets to sync, validate, correct, or recover your wallet.</p>
            </div>
          </div>
          <div className={style["getStarted"]}>
            <div>
              <span>2</span>
            </div>
            <div>
              <h3>Confirm Wallet</h3>
              <p>Verify ownership of the wallet you wish to import. Private keys remain within mobile wallets, ensuring user funds' security.</p>
            </div>
          </div>
          <div className={style["getStarted"]}>
            <div>
              <span>3</span>
            </div>
            <div>
              <h3>Connect Securely</h3>
              <p>Utilize end-to-end encryption with client-side generated keys to keep all user activities confidential.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default GetStarted;
