import React from 'react'

import '../../styles/Home.css'
import HomeLanding from './HomeLanding'
import About from './About'
import Leadership from './Leadership'
import Projects from './projects/Projects'
import Gallery from './Gallery'
import Footer from '../Footer'

//need to hide HomeLanding when the video goes to fullscreen because it is a descendent of About
const HomePage = ({ isFullscreen }) => (
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
