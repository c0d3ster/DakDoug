import React from 'react'

import '../../styles/Home.css'
import HomeLanding from './HomeLanding.jsx'
import About from './About.jsx'
import Leadership from './Leadership.jsx'
import Projects from './projects/Projects.jsx'
import Gallery from './Gallery.jsx'
import Footer from '../Footer.jsx'

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
