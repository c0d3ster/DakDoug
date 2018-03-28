import React from 'react';
import Eos from 'eosjs';

import Section from '../containers/SectionContainer.jsx';

/* This component uses es6 class syntax so that it can maintain a loading state and keep track of the mostRecentBlock recorded, currently directlyl pulling from Eos testnet in browser */
export default class EOSBlockExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.eos = Eos.Testnet({httpEndpoint: 'http://t1readonly.eos.io'}); // changed to working browser endpoint
    //chrome is complaining that the endpoint is not serving over HTTPS but my personal website is (needed to check 'load unsafe scripts')
    this.state = {
      loading: false,
      mostRecentBlock : {} // set to an empty object to prevent null checks below
    };
  }

  retreiveBlock() {
    this.setState({ loading : true }); //loading state to prevent stacking calls to EOS api

    //first retrieve the head_block_num then use those results to retrieve the head block information then store that data into this.state.mostRecentBlock
    this.eos.getInfo({})
    .then(result => {
      this.eos.getBlock(result.head_block_num)
      .then(block => {
        this.setState({
          loading : false,
          mostRecentBlock: block
        });
      });
    })
    .catch((err) => {
      alert(err.message); //would usually implement custom error handler sliding into view on top, bottom, or near the button
      this.setState({ //bring button back into view and reset block to empty object
        loading: false,
        mostRecentBlock: {}
      });
    });
  }

  alertBlockInfo() {
    alert(JSON.stringify(this.state.mostRecentBlock));
  }

  render() {
    return(
      <Section contentClass='pushed-section-content-container' background='./EOS.jpg' title='Block One' navList={['EOS', 'Steem', 'Contact']}>
        { /* everything is rendered in a flex grid I created except this absolutely positioned button logic */
        this.state.loading ? <div className='loader right-third-absolute'></div> : <button className='retreive-block-button right-third-absolute' onClick={this.retreiveBlock.bind(this)}>Retreive Most Recent Block</button>}
        <div className='row'>
          <h2 className='col center'>EOS Block Explorer</h2>
        </div>
        {/* display most important info about this block automatically */}
        <div className='row'>
          <h2 className='col center'>Block Number: </h2>
          <h3 className='col center'>{this.state.mostRecentBlock.block_num}</h3>
        </div>
        <div className='row'>
          <h2 className='col center'>Timestamp: </h2>
          <h3 className='col center'>{this.state.mostRecentBlock.timestamp}</h3>
        </div>
        <div className='row'>
          <h2 className='col center'>Producer: </h2>
          <h3 className='col center'>{this.state.mostRecentBlock.producer}</h3>
        </div>
        {/* provide users with an option to view the entire JSON for the mostRecentBlock when available */}
        <div className='row'>
          {Object.keys(this.state.mostRecentBlock).length && !this.state.loading ? <button className='col center detailed-info-button' onClick={this.alertBlockInfo.bind(this)}>Detailed Info</button> : ''}
        </div>
      </Section>
    )
  }
}
