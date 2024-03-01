import styles from './GetStartedToday.module.css';
import { useNavigate } from 'react-router-dom';

const GetStartedToday = () => {
    const navigate = useNavigate();
  return (
    <section className={styles.section}>
        <h2 className={styles.heading}>Get Started with DappsHub today</h2>
        <button className={styles.button} onClick={() => navigate('/select-wallet')} >Connect Wallet</button>
    </section>
  );
};

export default GetStartedToday;