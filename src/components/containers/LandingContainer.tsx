import { FC, ReactNode } from 'react'

import '../../styles/Landing.css'
import ParallaxBackground from './ParallaxBackground'

interface Props {
  background: string
  contentClass: string
  children: ReactNode
}

const LandingContainer: FC<Props> = ({ background, contentClass, children }) => (
  <div className='landing-container'>
    <ParallaxBackground min={-40} max={50} background={background}>
      <div className={contentClass}>{children}</div>
    </ParallaxBackground>
  </div>
)

export default LandingContainer
