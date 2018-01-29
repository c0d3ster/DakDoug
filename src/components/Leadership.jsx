import React from 'react';
import Section from './SectionContainer.jsx';

export default class Leadership extends React.Component {
  render() {
    let navList = ["Leadership", "Projects", "Gallery", "Contact"];
    return (
      <Section background="./FadedFire.jpg" title="Dakota Douglass" navList={navList}>
        <div className="row">
          <h2 className="col center">Leadership Development</h2>
        </div>
        <div className="row">
          <div className="placeholder-content col"></div>
        </div>
      </Section>
    );
  }
}
