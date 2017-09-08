import React, { Component } from 'react';
import { SuggestedShows } from '../components';

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ width: 200, height: 300, background: '#000' }}>
          <SuggestedShows />
        </div>
      </div>
    );
  }
}

export default Home;