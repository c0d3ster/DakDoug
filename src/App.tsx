import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ScrollContext } from 'react-router-scroll-4'
import { ParallaxProvider } from 'react-scroll-parallax'
import ReactGA from 'react-ga'

import './styles/App.css'
import HomePage from './components/home/HomePage'
import NotFoundPage from './components/NotFoundPage'
import { reactGaTrackingTag } from './settings'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFullscreen: false,
    }
  }

  componentDidMount() {
    ReactGA.initialize(reactGaTrackingTag)
    ReactGA.pageview(window.location.pathname)
    window.addEventListener('fullscreenchange', this.onFullScreenChange)
    window.addEventListener('webkitfullscreenchange', this.onFullScreenChange)
    window.addEventListener('mozfullscreenchange', this.onFullScreenChange)
  }

  componentWillUnmount() {
    window.removeEventListener('fullscreenchange', this.onFullScreenChange)
    window.removeEventListener(
      'webkitfullscreenchange',
      this.onFullScreenChange
    )
    window.removeEventListener('mozfullscreenchange', this.onFullScreenChange)
  }

  onFullScreenChange = () => {
    let fullscreenElement =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement
    this.setState({
      isFullscreen: !!fullscreenElement,
    })
  }

  render() {
    return (
      <ParallaxProvider>
        <Router>
          <ScrollContext>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <HomePage isFullscreen={this.state.isFullscreen} />
                )}
              />
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </ScrollContext>
        </Router>
      </ParallaxProvider>
    )
  }
}
