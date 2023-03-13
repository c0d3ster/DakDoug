import { useContext } from 'react'

import { WalletContext } from 'components/providers/WalletProvider'
import { WalletContextType } from '@/types'

export const useWalletContext = (): WalletContextType => useContext(WalletContext)