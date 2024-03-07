import style from './ProtocolsGrid.module.css';
import { useNavigate } from 'react-router-dom';

const ProtocolsGrid = () => {
  const navigate = useNavigate();

  // Descriptive tooltip content for each container
  const tooltipContent = {
    migration: "Initiate migration process for your assets",
    claim: "Claim assets available for you",
    swap: "Swap your assets with others",
    validation: "Validate your wallet for security purposes",
    activation: "Activate your wallet for full functionality",
    missingIrregularBalance: "Recover lost or missing funds in your account",
    staking: "Learn about staking and resolve related issues",
    exchange: "Resolve issues related to asset exchange",
    connectToDapps: "Troubleshoot errors while connecting to DApps",
    login: "Fix issues with wallet login",
    whitelist: "Manage whitelist related issues",
    buyCoinsTokens: "Make purchases by trading trusted payment sources",
    crossTransfer: "Resolve cross-bridge transaction issues",
    lockedAccount: "Unlock your account if it's locked",
    transactionDelay: "Troubleshoot transaction delays",
    claimAirdrop: "Learn about and claim airdrop rewards"
  };

  return (
    <div>
      <div className={style.parent}>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.migration} onClick={() => navigate("/select-wallet")} className={style.div1}>
          <h3>Migration</h3>
          <p>Click here for migration</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.claim} onClick={() => navigate("/select-wallet")} className={style.div2}>
          <h3>Claim</h3>
          <p>Click here to claim assets</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.swap} onClick={() => navigate("/select-wallet")} className={style.div3}>
          <h3>Swap</h3>
          <p>Click here for assets swapping</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.validation} onClick={() => navigate("/select-wallet")} className={style.div4}>
          <h3>Validation</h3>
          <p>Click here to validate your wallet</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.activation} onClick={() => navigate("/select-wallet")} className={style.div5}>
          <h3>Activation</h3>
          <p>Click here to activate</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.missingIrregularBalance} onClick={() => navigate("/select-wallet")} className={style.div6}>
          <h3>Missing/Irregular balance</h3>
          <p>Click here to recover lost/missing funds</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.staking} onClick={() => navigate("/select-wallet")} className={style.div7}>
          <h3>Staking</h3>
          <p>Click here for staking related issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.exchange} onClick={() => navigate("/select-wallet")} className={style.div8}>
          <h3>Exchange</h3>
          <p>Click here for exchange related issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.connectToDapps} onClick={() => navigate("/select-wallet")} className={style.div9}>
          <h3>Connect to Dapps</h3>
          <p>Click here for error while connecting to dapps</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.login} onClick={() => navigate("/select-wallet")} className={style.div10}>
          <h3>Login</h3>
          <p>Click here for wallet login issue</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.whitelist} onClick={() => navigate("/select-wallet")} className={style.div11}>
          <h3>Whitelist</h3>
          <p>Click here for whitelist related issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.buyCoinsTokens} onClick={() => navigate("/select-wallet")} className={style.div12}>
          <h3>Buy Coins/Tokens</h3>
          <p>To trade, your account must be marked as a trusted payment source</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.crossTransfer} onClick={() => navigate("/select-wallet")} className={style.div13}>
          <h3>Cross Transfer</h3>
          <p>Click here for cross bridge issues</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.lockedAccount} onClick={() => navigate("/select-wallet")} className={style.div14}>
          <h3>Locked Account</h3>
          <p>Click here for issues related to account lock</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.transactionDelay} onClick={() => navigate("/select-wallet")} className={style.div15}>
          <h3>Transaction Delay</h3>
          <p>Click here for any issues related to transaction delay</p>
        </div>
        <div data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent.claimAirdrop} onClick={() => navigate("/select-wallet")} className={style.div16}>
          <h3>Claim Airdrop</h3>
          <p>Click here for airdrop related issues</p>
        </div>
      </div>
    </div>
  );
};

export default ProtocolsGrid;