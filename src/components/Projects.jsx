import React from 'react';
import Section from './SectionContainer.jsx';

export default class Projects extends React.Component {
  render() {
    let navList = ["Projects", "Gallery", "Contact"];
    return (
      <Section background="./Mountain.jpg" title="c0d3ster" navList={navList}>
        <div className="row">
          <h2 className="col center">Projects</h2>
        </div>
        <div className="row">
        <div className="col placeholder-content"></div>
        <div className="col"></div>
        <div className="col"></div>
        </div>
      </Section>
    );
  }
}
