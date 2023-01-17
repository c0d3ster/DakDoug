import { FC } from 'react'

import {
  HomeLanding,
  AboutMe,
  Leadership,
  Projects,
  Gallery
} from 'components/home'
import { Footer } from 'components/organisms'

import '@/styles/Home.css'

export const HomePage: FC = () => (
  <>
    <HomeLanding />
    <AboutMe />
    <Leadership />
    <Projects />
    <Gallery />
    <Footer />
  </>
)