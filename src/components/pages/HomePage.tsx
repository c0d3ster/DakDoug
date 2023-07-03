import { FC } from 'react'

import {
  HomeLanding,
  AboutMe,
  Leadership,
  Projects,
  Gallery
} from 'components/organisms'
import { ParallaxLandingScrollableSections } from 'components/templates'

import '@/styles/Home.css'

export const HomePage: FC = () => (
  <ParallaxLandingScrollableSections
    landing={<HomeLanding />}
    sections={[
      <AboutMe key='AboutMe' />,
      <Leadership key='Leadership'/>,
      <Projects key='Projects'/>,
      <Gallery key='Gallery'/>
    ]}
  />
)