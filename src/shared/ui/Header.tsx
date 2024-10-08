import React, { useEffect, useState } from 'react';
import { useWallet } from '../hooks/useWallet';
import { Button } from './Button';

export const Header: React.FC = () => {
  const { walletAddress, connectWallet } = useWallet();
  const [showMetaMaskAlert, setShowMetaMaskAlert] = useState(false);

  useEffect(() => {
    if (!window.ethereum) {
      setShowMetaMaskAlert(true); 
    }
  }, []);

  return (
    <header className="z-[50] w-[1440px] h-[72px] bg-darkBackground flex items-center justify-between px-16 top-14 p-0">
      <div className="flex items-center justify-center bg-darkGray w-[199px] h-[46px] border-[1px] border-dashed border-lightGray">
        <span className="text-white font-bebas font-normal text-body1">LOGO</span>
      </div>
      
      <div className="text-orange-darkOrange font-bebas font-bold text-body1 max-w-[161px] truncate">
        {walletAddress ? (
          <span className="text-body1 font-bebas font-normal">{walletAddress}</span>
        ) : (
          <Button onClick={connectWallet}>
            <span className="flex items-center justify-center text-body1 font-bebas font-normal">CONNECT METAMASK</span>
          </Button>
        )}
      </div>

      {/* Уведомление о необходимости установки MetaMask */}
      {showMetaMaskAlert && (
        <div className="fixed h-[72px] top-0 left-0 right-0 bg-orange-darkOrange text-white p-4 text-center z-[60]">
          <p>
            MetaMask is not installed. Please{' '}
            <a
              href="https://metamask.io/download.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              install MetaMask
            </a>{' '}
            to use this application.
          </p>
        </div>
      )}
    </header>
  );
};
