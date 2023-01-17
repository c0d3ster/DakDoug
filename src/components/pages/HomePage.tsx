import { FC, ReactElement } from 'react'

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
  <>
    <ParallaxLandingScrollableSections
      landing={<HomeLanding />}
      sections={[<AboutMe />, <Leadership />, <Projects />, <Gallery />]}
    />
  </>
)