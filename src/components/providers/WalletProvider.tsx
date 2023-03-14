import { createContext, FC } from 'react'
import { AnchorProvider, Program } from '@coral-xyz/anchor'

import { WalletContextType } from '@/types'

export const WalletContext = createContext<WalletContextType>({
  anchorProvider: {} as AnchorProvider,
  getProgram: () => Promise.resolve({} as Program),
  setWalletAddress: () => {},
  walletAddress: '',
})

interface Props {
  walletContext: WalletContextType
  children: React.ReactNode
}

export const WalletProvider: FC<Props> = ({ children, walletContext }) => (
  <WalletContext.Provider value={walletContext}>{children}</WalletContext.Provider>
)