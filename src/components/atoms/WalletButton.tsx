import { FC } from 'react'

interface Props {
  walletAddress: string
}

export const WalletButton: FC<Props> = ({ walletAddress }) => {
  const displayWalletAddress = () => walletAddress.substring(0, 8).concat('...')

  return (<button>{displayWalletAddress()}</button>)
}