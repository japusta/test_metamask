import React from 'react';
import { useWallet } from '../../../shared/hooks/useWallet';
import { Button } from '../../../shared/ui/Button';

const WalletConnect: React.FC = () => {
  const { walletAddress, connectWallet } = useWallet(); // Используем контекст для получения адреса кошелька и функции подключения

  return (
    <div>
      {!walletAddress ? (
        <Button
          onClick={connectWallet} 
        >
          <span className="px-[24px] pt-[10px] pb-[7px] font-normal">CONNECT METAMASK</span>
        </Button>
      ) : (
        <span className="text-ellipsis text-white">{walletAddress}</span>
      )}
    </div>
  );
};

export default WalletConnect;
