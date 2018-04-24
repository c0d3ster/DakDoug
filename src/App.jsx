import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { ParallaxProvider } from 'react-scroll-parallax';

import './styles/App.css';
import HomePage from './components/home/HomePage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import BlockOnePage from './components/blockone/BlockOnePage.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullscreen: false
    };
  }

  componentDidMount() {
    window.addEventListener("fullscreenchange", this.onFullScreenChange);
    window.addEventListener("webkitfullscreenchange", this.onFullScreenChange);
    window.addEventListener("mozfullscreenchange", this.onFullScreenChange);
  }

  componentWillUnmount() {
    window.removeEventListener("fullscreenchange", this.onFullScreenChange);
    window.removeEventListener("webkitfullscreenchange", this.onFullScreenChange);
    window.removeEventListener("mozfullscreenchange", this.onFullScreenChange);
  }

  onFullScreenChange = () => {
  let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
  // if in fullscreen mode fullscreenElement won't be null
  console.log('updating');
  console.log(fullscreenElement);
  this.setState({
    isFullscreen: !!fullscreenElement
  });
}

  render() {
    return (
      <ParallaxProvider>
        <Router>
          <ScrollContext>
            <Switch>
              <Route exact path='/' render={() => <HomePage isFullscreen={this.state.isFullscreen}/>}/>
              <Route exact path='/blockone' component={BlockOnePage}/>
              <Route path='*' component={NotFoundPage}/>
            </Switch>
          </ScrollContext>
        </Router>
      </ParallaxProvider>
      );
  }
}
