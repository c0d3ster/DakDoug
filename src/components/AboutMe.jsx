import React from 'react';
import Observed from 'react-observed';
import Section from './SectionContainer.jsx';
import content from '../data/content';

export default class AboutMe extends React.Component {
  render() {
    let navList = ["About Me", "Projects", "Gallery", "Contact"];
    this.props.second ? navList.shift() : "";
    console.log("about me");
    return (
      <Section background="./RoadTrippin-8.jpg" title="Cody Douglass" navList={navList}>
        {content.about}
      </Section>
    );
  }
}
