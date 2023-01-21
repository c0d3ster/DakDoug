import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import { AudiusPage, HomePage, NotFoundPage } from 'components/pages'
import { useReactGA } from '@/hooks'

import '@/styles/Global.css'

export const App:FC = () => {
  useReactGA()

  return (
    <ParallaxProvider>
      <Router>
          <Routes>
            <Route
              path='/audius'
              element={<AudiusPage />}
            />
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
      </Router>
    </ParallaxProvider>
  )
}