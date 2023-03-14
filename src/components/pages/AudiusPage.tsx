import { FC, useState } from 'react'
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { clusterApiUrl, Connection, Commitment, PublicKey, ConfirmOptions } from '@solana/web3.js'

import { AudiusLanding, DesignConsiderations, TrackUploader } from 'components/organisms'
import { ParallaxLandingScrollableSections } from 'components/templates'
import { WalletProvider } from 'components/providers'
import { WalletContextType } from '@/types'
import { trackUploaderProgramId } from '@/settings'

const network = clusterApiUrl('devnet')
const programId = new PublicKey(trackUploaderProgramId)
const opts: ConfirmOptions = {
  preflightCommitment: 'processed',
}

export const AudiusPage: FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>('')

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

  return(
    <WalletProvider walletContext={walletContext}>
      <ParallaxLandingScrollableSections
        landing={<AudiusLanding />}
        sections={[<TrackUploader />, <DesignConsiderations />]}
      />
    </WalletProvider>
  )
}