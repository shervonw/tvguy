import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTVShowEpisode } from '../actions';
import { Summary } from '../../core/components';
import {
  Row, Col
} from 'react-materialize';

import {
  EpisodePoster,
} from '../components';


class Episode extends Component {
  componentWillMount() {
    const {
      fetchTVShowEpisode,
      match
    } = this.props;

    fetchTVShowEpisode(match.params.id, match.params.season, match.params.episode);
  }

  render() {
    const { episode } = this.props;
    
    if (!episode) {
      return false;
    }

    return (
      <div className="container">
        
        <EpisodePoster episode={ episode } />

        <Row>
          <Col s={12}>
            <Summary summary={ episode.summary } />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episode: state.episode
});

const mapDispatchToProps = dispatch => ({
  fetchTVShowEpisode: (id, season, episode, callback) => dispatch(fetchTVShowEpisode(id, season, episode, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Episode);