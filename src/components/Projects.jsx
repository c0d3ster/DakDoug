import React from 'react';
import Section from './SectionContainer.jsx';
import ProjectBox from './ProjectBox.jsx';

//store hover item into state so that we can set title appropriately
export default class Projects extends React.Component {
  render() {
    let navList = ["Projects", "Gallery", "Contact"];
    let projectBackgroundList = ["./Ballz.png", "./Q.png", "./TheHokieForum.png"];
    let projectTitleList = ["BALLZ", "CollabQ", "The Hokie Forum"];
    return (
      <Section background="./Mountain.jpg" title="c0d3ster" navList={navList}>
        <div className="row">
          <h2 className="col center">Projects</h2>
        </div>
        <div className="row">
        {projectBackgroundList.map((background, index) => <ProjectBox background={background} key={index} count={index+1} title={projectTitleList[index]}/>)}
        </div>
      </Section>
    );
  }
}
