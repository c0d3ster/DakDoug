import { FC, useCallback, useState } from 'react'

import '@/styles/Wallet.css'

export const WalletButton: FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    const { solana } = window as any

    if (solana) {
      const response = await solana.connect();
      setWalletAddress(response.publicKey.toString());
    }
  }

  const displayWalletAddress = useCallback(() => {
    return walletAddress ? walletAddress.substring(0, 8).concat('...') : ''
  }, [walletAddress])

  return (
    walletAddress
    ? <button className='wallet-button'>{displayWalletAddress()}</button> 
    : <button className='wallet-button' onClick={connectWallet}>Connect Wallet</button>
  )
}