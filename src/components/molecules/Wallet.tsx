import { FC, useEffect } from 'react'

import { useWalletContext } from '@/hooks'
import { WalletButton } from 'components/atoms'

import '@/styles/Wallet.css'

export const Wallet: FC = () => {
  const { walletAddress, setWalletAddress } = useWalletContext()

  const checkForAutoconnect = async () => {
    try {
      const { solana } = window
  
      if (solana?.isPhantom) {
        const response = await solana.connect({ onlyIfTrusted: true})
        setWalletAddress(response.publicKey.toString())
      }
    } catch (error) {
      console.error(error)
    }
  }

  const connectWallet = async () => {
    try {
      const { solana } = window
  
      if (solana) {
        const response = await solana.connect()
        setWalletAddress(response.publicKey.toString())
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const onLoad = async () => {
      await checkForAutoconnect()
    }

    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])


  return (
    <div className='wallet-wrapper'>
    {walletAddress
      ? <WalletButton walletAddress={walletAddress} />
      : <button onClick={connectWallet}>Connect Wallet</button>}
    </div>
  )
}