import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import styles from './styles.css';
import Home from './components/Home.jsx';

export default class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <Route exact path='/' component={Home}/>
        </Router>
      </ParallaxProvider>
      );
  }
}