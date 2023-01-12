import { FC, ReactNode } from 'react'
import { Parallax } from 'react-scroll-parallax'

import '../styles/Parallax.css'

interface Props {
  background: string
  min: number
  max: number
  children: ReactNode
}

const ParallaxBackground: FC<Props> = ({ background, min, max, children }) => (
  <div className='parallax-container'>
    <Parallax translateY={[min, max]}>
      <div
        className='parallax-image'
        style={{
          backgroundImage: background.match(/\.(png|jpg)$/)
            ? `url(${background})`
            : `${background}`,
        }}
      />
    </Parallax>
    <div className='parallax-children'>{children}</div>
  </div>
)

export default ParallaxBackground
