import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import styles from './styles.css';
import Home from './components/Home.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

export default class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='*' component={NotFoundPage}/>
          </Switch>
        </Router>
      </ParallaxProvider>
      );
  }
}
