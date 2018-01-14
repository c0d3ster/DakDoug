import React from 'react';
import Section from './SectionContainer.jsx';
import content from '../data/content';

export default class AboutMe extends React.Component {
  render() {
    console.log("about me");
    return (
      <Section title="Cody Douglass" navList={["About Me", "Projects"]} key={Math.random()}>
        {content.about}
      </Section>
    );
  }
}