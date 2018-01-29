import React from 'react';
import Section from './SectionContainer.jsx';

export default class Gallery extends React.Component {
  render() {
    let navList = ["Gallery", "Contact"];
    return (
      <Section background="./Horizon.jpg" title="DakDoug" navList={navList}>
        <div className="row">
          <h2 className="col center">Gallery</h2>
        </div>
        <div className="row">
          <h2 className="placeholder-content col">Coming soon...</h2>
        </div>
      </Section>
    );
  }
}
