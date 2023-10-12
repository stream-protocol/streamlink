import ActionsPanelTitleBar from './ui/ActionsPanelTitleBar';
import Box from '@mui/material/Box';
import { useActionState } from './state/useActionState';
import Typography from '@mui/material/Typography';
import CurrencyInput from '../common/CurrencyInput';
import Button from '@mui/material/Button';
import { useState, MouseEvent } from 'react';
import { useLink } from '../../useLink';
import LinkExportPanel from '../main/LinkExportPanel';
import { randBuf, DEFAULT_STREAMLINK_KEYLENGTH, SEED_LENGTH, kdfz } from '../../../lib/crypto';
import { Keypair } from '@solana/web3.js';
import { getLinkPath } from '../../../lib/link';

const CreateStreamLink = () => {
  const { goBack } = useActionState();
  const [inputAmountSol, setInputAmountSol] = useState<number>(NaN);
  const { getFeeEstimate, sendSOL, balanceSOL } = useLink();
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ newLink, setNewLink ] = useState<string>("");

  const splitStreamLink = async (e: MouseEvent<HTMLButtonElement>) => {
    // TODO validate PublicKey and amount
    // TODO treat full amount differently

    // it looks like you can open a new tab in an async fn but not after any await.
    e.preventDefault();

    // just useful for testing
    const skipChecks = false;
    const fees = getFeeEstimate();
    const amt = inputAmountSol + fees;

    if(!skipChecks && ((inputAmountSol === 0) || isNaN(inputAmountSol))) {
      alert("Specify an amount greater than 0 to create another Streamlink");
      return;
    }

    if(!skipChecks && (amt > balanceSOL)) {
        alert("Cannot withdraw more than balance after fees");
        return;
    }

    setLoading(true);
    const b = await randBuf(DEFAULT_STREAMLINK_KEYLENGTH);
    const newLink = window.location.origin + getLinkPath(b);
    const newLinkLoading = newLink.split('#').join('?loading=true#');
    const seed = await kdfz(SEED_LENGTH, b);
    const kp = Keypair.fromSeed(seed);
    const newWindow = window.open(newLinkLoading, "_blank");

    // TODO 
    sendSOL(kp.publicKey, amt).then(() => {
      setLoading(false);
      setNewLink(newLink);
      if(newWindow !== null) {
        newWindow.location.href = newLink;
      }
    }).catch((err) => {
      if(err instanceof Error) {
          alert(err.message);
          setLoading(false);
          return;
      }
    });
  }

  return (
    <Box width='100%'>
      <ActionsPanelTitleBar title='Create StreamLink' backOnClick={goBack} />
      { newLink === "" ? 
        <div>
          <Typography textAlign='center' style={{marginTop: '1rem', marginBottom: '1rem'}}>
            How much do you want to send?
          </Typography>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <CurrencyInput
              fiatCurrency='USD'
              cryptoCurrency='SOL'
              useMax={true}
              onValueChange={setInputAmountSol}/>
            <Button
              style={{marginTop: '1rem'}}
              variant='contained'
              onClick={splitStreamLink}
              disabled={loading}
            >
              Create
            </Button>

            {loading && 
            <div style={{marginTop: '1rem'}}>
              Opening link in new tab, so that it's in your history in case something goes wrong.
            </div>
            }
          </Box>
        </div>
        : 
        <LinkExportPanel url={newLink} newTab={true}/>
      }
    </Box>
  );
};

export default CreateStreamLink;
