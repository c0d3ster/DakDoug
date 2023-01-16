import { FC } from 'react'

import '../../styles/Home.css'
import HomeLanding from './HomeLanding'
import About from './AboutMe'
import Leadership from './Leadership'
import Projects from './projects/Projects'
import Gallery from './Gallery'
import Footer from '../Footer'

interface Props {
  isFullscreen: boolean
}

// Need to hide HomeLanding when the video goes to fullscreen because it is a descendent of About
const HomePage: FC<Props> = ({ isFullscreen }) => (
  <div>
    {!isFullscreen && <HomeLanding />}
    <About />
    <Leadership />
    <Projects />
    <Gallery />
    <Footer />
  </div>
)

export default HomePage
