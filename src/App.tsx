import { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import { useIsFullscreen, useReactGA } from './hooks'
import HomePage from './components/home/HomePage'
import NotFoundPage from './components/NotFoundPage'

import './styles/App.css'

const App:FC = () => {
  const isFullscreen = useIsFullscreen()
  
  useReactGA()

  return (
    <ParallaxProvider>
      <Router>
          <Switch>
            <Route
              path='/'
              element={<HomePage isFullscreen={isFullscreen} />}
            />
            <Route path='*' element={<NotFoundPage />} />
          </Switch>
      </Router>
    </ParallaxProvider>
  )
}

export default App