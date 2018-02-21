import React from 'react';
import Section from './SectionContainer.jsx';
import content from '../data/content';

export default class Leadership extends React.Component {
  render() {
    let navList = ["Leadership", "Projects", "Gallery", "Contact"];
    return (
      <Section background="./FadedFire.jpg" title="Dakota Douglass" navList={navList}>
        <div className="row">
          <h2 className="col center">Leadership Development</h2>
        </div>
        <div className="row">
          <p className="col">{content.leadership}</p>
        </div>
      </Section>
    );
  }
}