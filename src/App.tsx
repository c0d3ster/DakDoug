import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import { useReactGA } from './hooks'
import HomePage from './components/home/HomePage'
import NotFoundPage from './components/NotFoundPage'

import './styles/App.css'

const App:FC = () => {
  
  useReactGA()

  return (
    <ParallaxProvider>
      <Router>
          <Routes>
            <Route
              path='/'
              element={<HomePage/>}
            />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
      </Router>
    </ParallaxProvider>
  )
}

export default App