import React from 'react';
import Section from './SectionContainer.jsx';

export default class Projects extends React.Component {
  render() {
    let navList = ["Projects", "Gallery", "Contact"];
    let projectBackgroundList = ["Ballz.png", "Q.png", "Mountain.jpg"];
    return (
      <Section background="./Mountain.jpg" title="c0d3ster" navList={navList}>
        <div className="row">
          <h2 className="col center">Projects</h2>
        </div>
        <div className="row">
        <div className="col project-box project-box--1" style={{ backgroundImage : `url(${projectBackgroundList[0]})`}}>BALLZ</div>
        <div className="col project-box project-box--2" style={{ backgroundImage : `url(${projectBackgroundList[1]})`}}>CollabQ</div>
        <div className="col project-box project-box--3" style={{ backgroundImage : `url(${projectBackgroundList[2]})`}}>The Hokie Forum</div>
        </div>
      </Section>
    );
  }
}
