import React from 'react';
import { Link } from 'react-router';
import { ParallaxProvider } from 'react-scroll-parallax';
import styles from './styles.css';
import Landing from './components/LandingContainer.jsx';
import Section from './components/SectionContainer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <main>
          <Landing/>
          <Section/>
          <Section/>
        </main>
      </ParallaxProvider>
      );
  }
}