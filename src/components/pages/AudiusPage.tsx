import { FC, useState } from 'react'

import { AudiusLanding, DesignConsiderations, TrackUploader } from 'components/organisms'
import { ParallaxLandingScrollableSections } from 'components/templates'
import { WalletProvider } from 'components/providers'
import { WalletContextType } from '@/types'

export const AudiusPage: FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>('')

  const walletContext: WalletContextType = {
    walletAddress,
    setWalletAddress,
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