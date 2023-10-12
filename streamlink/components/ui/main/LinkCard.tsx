import Typography from "@mui/material/Typography";
import styles from '../../../styles/LinkCard.module.css'
import { useLink } from "../../useLink";

const LinkCard = () => {
  const { linkKeypair, balanceSOL, balanceUSD } = useLink();
  const getCardDisplayText = () => {
    const url = window.location.href;
    if (url.search("wallet") != -1) {
      return linkKeypair.publicKey.toBase58();
    }
    return window.location.hash;
  };

  const cdt = getCardDisplayText();

  return(
    <div className={styles.linkCard}>
      <img src="/streamlink-card.png"/>
      <div className={styles.cardBalance}>
        {!isNaN(balanceSOL) && <Typography color="black">{balanceSOL.toFixed(4)} SOL</Typography>}
        {!isNaN(balanceUSD) && <Typography className={styles.balanceUSD} variant="h3">${balanceUSD.toFixed(2)}</Typography>}
      </div>
      <div className={styles.cardIdentifier}>
        <Typography style={{fontSize: "0.7rem"}}>{cdt}</Typography>
      </div>
    </div>
  );
};

export default LinkCard;
