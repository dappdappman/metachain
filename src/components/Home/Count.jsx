import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import style from './Count.module.css';

const Count = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <section className={style["count-section"]}>
      <div className={style["count-container"]}>
        <h4 className={style["count-title"]}>Total Websockets</h4>
        <p className={style["count-value"]}>
          <VisibilitySensor onChange={onVisibilityChange}>
              <CountUp end={isVisible ? 1265480 : 0} duration={10} />
          </VisibilitySensor><span className={style["count-plus"]}>+</span>
        </p>
        <p className={style["count-label"]}>Per day</p>
      </div>
      <div className={style["count-container"]}>
        <h4 className={style["count-title"]}>Active Websockets</h4>
        <p className={style["count-value"]}>
          <VisibilitySensor onChange={onVisibilityChange}>
              <CountUp end={isVisible ? 967981 : 0} duration={10} />
          </VisibilitySensor><span className={style["count-plus"]}>+</span>
        </p>
        <p className={style["count-label"]}>Currently</p>
      </div>
      <div className={style["count-container"]}>
        <h4 className={style["count-title"]}>Messages</h4>
        <p className={style["count-value"]}>
          <VisibilitySensor onChange={onVisibilityChange}>
              <CountUp end={isVisible ? 37759 : 0} duration={10} />
          </VisibilitySensor><span className={style["count-plus"]}>+</span>
        </p>
        <p className={style["count-label"]}>Per second</p>
      </div>
      <div className={style["count-container"]}>
        <h4 className={style["count-title"]}>Wallets</h4>
        <p className={style["count-value"]}>
          <VisibilitySensor onChange={onVisibilityChange}>
              <CountUp end={isVisible ? 235 : 0} duration={10} />
          </VisibilitySensor><span className={style["count-plus"]}>+</span>
        </p>
        <p className={style["count-label"]}>Integrated</p>
      </div>
      <div className={style["count-container"]}>
        <h4 className={style["count-title"]}>Apps</h4>
        <p className={style["count-value"]}>
          <VisibilitySensor onChange={onVisibilityChange}>
              <CountUp end={isVisible ? 582 : 0} duration={10} />
          </VisibilitySensor><span className={style["count-plus"]}>+</span>
        </p>
        <p className={style["count-label"]}>Unified</p>
      </div>
    </section>
  );
};

export default Count;