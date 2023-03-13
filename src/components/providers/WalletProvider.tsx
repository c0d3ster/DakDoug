import { createContext, FC } from 'react'

import { WalletContextType } from '@/types'

export const WalletContext = createContext<WalletContextType>({
  walletAddress: '',
  setWalletAddress: () => {},
})

interface Props {
  walletContext: WalletContextType
  children: React.ReactNode
}

export const WalletProvider: FC<Props> = ({ children, walletContext }) => (
  <WalletContext.Provider value={walletContext}>{children}</WalletContext.Provider>
)