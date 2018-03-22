import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { ParallaxProvider } from 'react-scroll-parallax';
import styles from './styles.css';
import Home from './components/Home.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import BlockOne from './components/blockone/BlockOne.jsx'

export default class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <ScrollContext>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/blockone' component={BlockOne}/>
              <Route path='*' component={NotFoundPage}/>
            </Switch>
          </ScrollContext>
        </Router>
      </ParallaxProvider>
      );
  }
}
