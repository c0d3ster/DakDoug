import { FC } from 'react'

import '../../styles/Home.css'
import HomeLanding from './HomeLanding'
import About from './AboutMe'
import Leadership from './Leadership'
import Projects from './projects/Projects'
import Footer from '../Footer'

const HomePage: FC = () => (
  <div>
    <HomeLanding />
    <About />
    <Leadership />
    <Projects />
    <Footer />
  </div>
)

export default HomePage
