import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-materialize';
import { fetchTVShowData } from '../actions';
import { Summary } from '../../core/components';
import {
  Poster,
  RecentEpisode,
  Cast,
  Seasons,
  ViewAllEpisodes
} from '../components';

class Show extends Component {

  componentWillMount() {
    const {
      fetchTVShowData,
      match
    } = this.props;

    fetchTVShowData(match.params.id);
  }

  render() {
    const { show, match } = this.props;

    if (!show) {
      return false;
    }

    const summary = show.summary || '<div />';

    return (
      <div className="container">

        <Poster show={ show } />
        
        <Row>
          <Col s={12}>
            <Summary summary={ summary } summaryStyle={{ marginTop: 50, marginBottom: 50 }} />
          </Col>
        </Row>
        
        <Row>
          {
            show._embedded.previousepisode &&
            <RecentEpisode 
              id={ match.params.id }
              episode={ show._embedded.previousepisode }
              title={ 'Previous episode' }
            />
          }
          {
            show._embedded.nextepisode &&
            <RecentEpisode
              id={ match.params.id }
              episode={ show._embedded.nextepisode }
              title={ 'Next episode' } 
            />
          }
        </Row>

        <ViewAllEpisodes />

        {
          (show._embedded.cast && show._embedded.cast.length > 0) &&
          <Cast cast={ show._embedded.cast } />
        }

        { 
          (show._embedded.seasons && show._embedded.seasons.length > 0) && 
          <Seasons seasons={ show._embedded.seasons } />
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  show: state.show
});

const mapDispatchToProps = dispatch => ({
  fetchTVShowData: (id, callback) => dispatch(fetchTVShowData(id, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);