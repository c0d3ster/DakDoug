import { FC, ReactNode } from 'react'

import { ParallaxBackground } from 'components/molecules/ParallaxBackground'

import '@/styles/Landing.css'

interface Props {
  background: string
  contentClass: string
  children: ReactNode
}

export const Landing: FC<Props> = ({ background, contentClass, children }) => (
  <>
    <ParallaxBackground min={-40} max={50} background={background}>
      <div className={contentClass}>{children}</div>
    </ParallaxBackground>
  </>
)
