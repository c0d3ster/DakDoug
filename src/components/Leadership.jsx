import React from 'react';
import Section from './SectionContainer.jsx';

export default class Leadership extends React.Component {
  render() {
    let navList = ["Leadership", "Projects", "Gallery", "Contact"];
    return (
      <Section background="./FadedFire.jpg" title="Dakota Douglass" navList={navList}>
        <h2>Leadership Development</h2>
        <div></div>
        <div></div>
      </Section>
    );
  }
}
