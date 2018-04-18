import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { ParallaxProvider } from 'react-scroll-parallax';

import './styles/App.css';
import HomePage from './components/home/HomePage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import BlockOnePage from './components/blockone/BlockOnePage.jsx'

export default class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <ScrollContext>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/blockone' component={BlockOnePage}/>
              <Route path='*' component={NotFoundPage}/>
            </Switch>
          </ScrollContext>
        </Router>
      </ParallaxProvider>
      );
  }
}
