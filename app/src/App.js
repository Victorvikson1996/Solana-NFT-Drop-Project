import React, { useEffect } from 'react';
import './App.css';
import twitterLogo from './assets/twitter-logo.svg';

// Constants
const TWITTER_HANDLE = 'victorebukaezea';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  const checkIfWallectisConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');


          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          )
        }
      } else {
        alert('solana object not found! Get a Phantom Wallet 👻')
      }



    } catch (error) {
      console.error(error)

    }
  };

  /*
  * Let's define this method so our code doesn't break.
  * We will write the logic for this next!
  */

  const connectWallet = async () => {

  }

  const renderNotConnectedContainer = () => {
    <button className='cta-button connect-wallet-button' onClick={connectWallet}>
      Connect to Wallet
    </button>
  }





  /*
  * When our component first mounts, let's check to see if we have a connected
  * Phantom Wallet
  */
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWallectisConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load, onLoad')
  }, [])



  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          {renderNotConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
