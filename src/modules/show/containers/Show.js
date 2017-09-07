import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Icon } from 'react-materialize';
import { fetchTVShowMeta } from '../actions';
import { Summary } from '../../core/components';
import {
  Poster,
  RecentEpisode,
  Cast,
  Seasons
} from '../components';

class Show extends Component {

  componentWillMount() {
    const {
      fetchTVShowMeta,
      match
    } = this.props;

    fetchTVShowMeta(match.params.id);
  }

  render() {
    const { show, match } = this.props;

    if (!show || !show._meta) {
      return false;
    }

    return (
      <div className="container">

        <Poster show={ show._meta } />
        
        <Row>
          <Col s={12}>
            <Summary summary={ show._meta.summary } />
          </Col>
        </Row>
        
        <Row>
          { show.prevEpisode && <RecentEpisode id={ match.params.id } episode={ show.prevEpisode } title={ 'Previous episode' } /> }
          { show.nextEpisode && <RecentEpisode id={ match.params.id } episode={ show.nextEpisode } title={ 'Next episode' } /> }
        </Row>

        <Row>
          <Col s={12}
            style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}
          >
            <div>
              <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'uppercase', fontSize: 12,  }}>
                { 'View all episodes' } <Icon tiny>navigate_next</Icon>
              </a>
            </div>
          </Col>
        </Row>

        {
          show._meta._embedded.cast.length > 0 &&
          <Cast cast={ show._meta._embedded.cast } />
        }

        { 
          show.seasons && 
          <Seasons seasons={ show.seasons } />
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  show: state.show
});

const mapDispatchToProps = dispatch => ({
  fetchTVShowMeta: (id, callback) => dispatch(fetchTVShowMeta(id, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);