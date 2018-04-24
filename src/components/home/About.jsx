import React from 'react';
import classnames from 'classnames';

import Section from '../containers/SectionContainer.jsx';
import content from '../../data/Home.json';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      displayVideo: false
      };
  }

  switchContent = () => {
    this.setState({displayVideo: !this.state.displayVideo});
  }

  nextItem = () => {
    this.setState({ count : this.state.count + 1});
  }

  prevItem = () => {
    this.setState({ count : this.state.count - 1});
  }

  render() {
    let navList = ['About', 'Leadership', 'Projects', 'Gallery', 'Contact'];
    let iconList = ['Resume', 'LinkedIn', 'Facebook', 'Instagram'];

    let contentList = ['who', 'childhood', 'teenage', 'college'];
    let backgroundList = ['VirginiaBeachSnowySunrise.jpg','VirginiaBeach.jpg', 'OceanLakes.jpg', 'Blacksburg.jpg'];

    let currItem = contentList[this.state.count];
    let prevButton = classnames('about-prev-button', {
      'hidden': (this.state.count == 0) || this.state.displayVideo
    });
    let nextButton = classnames('about-next-button', {
      'hidden': (this.state.count == contentList.length-1) || this.state.displayVideo
    });

    return (
      <Section name='About' background={backgroundList[this.state.count]}  title='Cody Douglass' navList={navList} iconList={iconList} contentClass='pushed-section-content-container'>
        <div className='row center'>
          <div className='col'>
            <label className='about-type-text'>Intro Type:</label>
            <label className='about-type-text'>Text</label><input type='radio' name='intro' id='text'
            onChange={this.switchContent} checked={!this.state.displayVideo} />
          <label className='about-type-text'>Video</label><input type='radio' name='intro' id='video' onChange={this.switchContent} checked={this.state.displayVideo}/>
          </div>
        </div>
        {this.state.displayVideo
          ? <div className='about-video-container'>
              <iframe className='about-video'
              src='https://www.youtube.com/embed/fdzHO2bFIcc'
              frameBorder='0'
              allow='encrypted-media'
              allowFullScreen='allowFullScreen'>
              </iframe>
            </div>
          : <div>
              <div className='row even-space'>
                <button className={prevButton} onClick={this.prevItem}>previous</button>
                <h2> Who Is Cody Douglass?</h2>
                <button className={nextButton} onClick={this.nextItem}>next</button>
              </div>
              <div className='row'>
                <p className='col'>{content.about[currItem]}</p>
              </div>
            </div>
        }
      </Section>
    );
  }
}
