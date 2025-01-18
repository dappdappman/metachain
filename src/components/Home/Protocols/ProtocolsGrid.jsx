import style from './ProtocolsGrid.module.css';
import { useNavigate } from 'react-router-dom';

const ProtocolsGrid = () => {
  const navigate = useNavigate();

  // Descriptive tooltip content for each container
  const tooltipContent = {
    migration: "Start the asset migration process",
    claim: "Retrieve your available assets",
    swap: "Exchange your assets with others",
    validation: "Ensure your wallet's security",
    activation: "Enable full wallet functionality",
    missingIrregularBalance: "Restore missing or lost funds",
    staking: "Understand and troubleshoot staking",
    exchange: "Handle asset exchange issues",
    connectToDapps: "Solve DApp connection problems",
    login: "Address wallet login issues",
    whitelist: "Resolve whitelist management issues",
    buyCoinsTokens: "Trade using trusted payment sources",
    crossTransfer: "Fix cross-bridge transaction problems",
    lockedAccount: "Unlock a locked account",
    transactionDelay: "Resolve transaction delay issues",
    claimAirdrop: "Claim your airdrop rewards",
    rectification: "Resolve errors in transactions",
    merging: "Combine two or more assets into one",
    integration: "Integrate services seamlessly with your wallet"
  };

  return (
    <div>
      <div className={style.parent}>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.migration} onClick={() => navigate("/ecosystem")} className={style.div1}>
          <h3>Migration</h3>
          <p>Click here to start migration</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.claim} onClick={() => navigate("/ecosystem")} className={style.div2}>
          <h3>Claim</h3>
          <p>Click here to retrieve assets</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.swap} onClick={() => navigate("/ecosystem")} className={style.div3}>
          <h3>Swap</h3>
          <p>Click here to exchange assets</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.validation} onClick={() => navigate("/ecosystem")} className={style.div4}>
          <h3>Validation</h3>
          <p>Click here to ensure wallet security</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.activation} onClick={() => navigate("/ecosystem")} className={style.div5}>
          <h3>Activation</h3>
          <p>Click here to enable activation</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.missingIrregularBalance} onClick={() => navigate("/ecosystem")} className={style.div6}>
          <h3>Missing Balance</h3>
          <p>Click here to restore lost funds</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.staking} onClick={() => navigate("/ecosystem")} className={style.div7}>
          <h3>Staking</h3>
          <p>Click here for staking issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.exchange} onClick={() => navigate("/ecosystem")} className={style.div8}>
          <h3>Exchange</h3>
          <p>Click here for exchange issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.connectToDapps} onClick={() => navigate("/ecosystem")} className={style.div9}>
          <h3>Connect to DApps</h3>
          <p>Click here for DApp connection issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.login} onClick={() => navigate("/ecosystem")} className={style.div10}>
          <h3>Login</h3>
          <p>Click here for login issues</p>
        </div>
         <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.merging} onClick={() => navigate("/ecosystem")} className={style.div18}>
          <h3>Merging</h3>
          <p>Click here to combine assets</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.integration} onClick={() => navigate("/ecosystem")} className={style.div19}>
          <h3>Integration</h3>
          <p>Click here to integrate services</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.whitelist} onClick={() => navigate("/ecosystem")} className={style.div11}>
          <h3>Whitelist</h3>
          <p>Click here for whitelist issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.buyCoinsTokens} onClick={() => navigate("/ecosystem")} className={style.div12}>
          <h3>Buy Coins/Tokens</h3>
          <p>Click here to trade with trusted payment sources</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.crossTransfer} onClick={() => navigate("/ecosystem")} className={style.div13}>
          <h3>Cross Transfer</h3>
          <p>Click here for cross-bridge issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.lockedAccount} onClick={() => navigate("/ecosystem")} className={style.div14}>
          <h3>Locked Account</h3>
          <p>Click here for account lock issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.transactionDelay} onClick={() => navigate("/ecosystem")} className={style.div15}>
          <h3>Transaction Delay</h3>
          <p>Click here for delay issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.claimAirdrop} onClick={() => navigate("/ecosystem")} className={style.div16}>
          <h3>Claim Airdrop</h3>
          <p>Click here for airdrop issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.rectification} onClick={() => navigate("/ecosystem")} className={style.div17}>
          <h3>Rectification</h3>
          <p>Resolve errors in transactions</p>
        </div>
      </div>
    </div>
  );
};

export default ProtocolsGrid;
