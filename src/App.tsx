import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import { HomePage, NotFoundPage } from '@/components/pages'
import { useReactGA } from '@/hooks'

import '@/styles/App.css'

export const App:FC = () => {
  useReactGA()

  return (
    <ParallaxProvider>
      <Router>
          <Routes>
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