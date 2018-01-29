import React from 'react';
import Observed from 'react-observed';
import Section from './SectionContainer.jsx';
import content from '../data/content';

export default class AboutMe extends React.Component {
  render() {
    let navList = ["About Me", "Leadership", "Projects", "Gallery", "Contact"];
    return (
      <Section background="./VirginiaBeach.jpg" title="Cody Douglass" navList={navList}>
        <div className="row">
          <h2 className="about-title col center"> Who Is Cody Douglass?</h2>
        </div>
        <div className="row">
          <p className="about-content">{content.who}</p>
          <p className="about-content">{content.childhood}</p>
          <p className="about-content">{content.teenage}</p>
        </div>
        {/*<iframe className="about-video"
          src="https://www.youtube.com/embed/P7G_YggEP4I?rel=0?showinfo=0"
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen>
        </iframe>*/}
      </Section>
    );
  }
}
