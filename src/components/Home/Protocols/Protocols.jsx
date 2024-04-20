import style from './Protocols.module.css';
import ProtocolsGrid from './ProtocolsGrid';

const Protocols = () => {
    return (
        <section className={style.protocolContainer}>
            {/* <h2 className={style.protocolTitle}>Sync Various Wallet Issues on a Secure Server</h2> */}
            {/* <h2 className={style.protocolTitle}>Quick Start</h2> */}
            <p className={style.protocolInfo} >The protocols establish a remote resolution between all non-custodial wallet.</p>
            <ProtocolsGrid />
        </section>
    )
}

export default Protocols;