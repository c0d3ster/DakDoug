import { FC, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { clusterApiUrl, Connection, PublicKey, ConfirmOptions } from '@solana/web3.js'
import { AnchorProvider, Program } from '@coral-xyz/anchor'

import { AdminPage, AudiusPage, HomePage, NotFoundPage } from 'components/pages'
import { WalletProvider } from 'components/providers'
import { useReactGA } from '@/hooks'
import { WalletContextType } from '@/types'
import { trackUploaderProgramId } from '@/settings'

import '@/styles/Global.css'

const network = clusterApiUrl('devnet')
const programId = new PublicKey(trackUploaderProgramId)
const opts: ConfirmOptions = {
  preflightCommitment: 'processed',
}

export const App:FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>('')
  useReactGA()

  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment)
    const provider = new AnchorProvider(connection, window.solana, opts)
    return provider
  }

  const getProgram = async () => {
    const idl = await Program.fetchIdl(programId, getProvider())
    
    if (!idl) {
      throw new Error('idl not found')
    }

    return new Program(idl, programId, getProvider())
  }

  const walletContext: WalletContextType = {
    anchorProvider: getProvider(),
    getProgram,
    setWalletAddress,
    walletAddress,
  }

  return (
    <WalletProvider walletContext={walletContext}>
      <ParallaxProvider>
        <Router>
            <Routes>
              <Route
                path='/admin'
                element={<AdminPage />}
              />
              <Route
                path='/audius'
                element={<AudiusPage />}
              />
              <Route
                path='/'
                element={<HomePage />}
              />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
      </ParallaxProvider>
    </WalletProvider>
  )
}