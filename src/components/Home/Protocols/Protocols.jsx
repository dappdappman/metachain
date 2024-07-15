import style from './Protocols.module.css';
import ProtocolsGrid from './ProtocolsGrid';

const Protocols = () => {
    return (
        <section className={style.protocolContainer}>
            <p className={style.protocolInfo} >The protocols establish a remote resolution between all non-custodial wallet.</p>
            <ProtocolsGrid />
        </section>
    )
}

export default Protocols;