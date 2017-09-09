import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SuggestedShows } from '../components';

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '100%', height: '100vh', }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: 60,  paddingRight: 50, boxSizing: 'border-box', }}>
            <Link to="/shows" style={{ paddingRight: 24, paddingLeft: 24 }}>Shows</Link>
          </div>
          <div className="divider"></div> 
        </div>
        <SuggestedShows />
      </div>
    );
  }
}

export default Home;