
import { FC } from 'react'

import { Landing } from 'components/molecules/Landing'

import '@/styles/Audius.css'

export const AudiusLanding: FC = () => (
  <Landing background='AudiusBackgroundLogoTall.png' contentClass='audius-landing-content row'>
    <h1 className='audius-landing-title-left col'>Welcome</h1>
    <h1 className='audius-landing-title-right col'>Audius!</h1>
  </Landing>
)