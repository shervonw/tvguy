import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  fetchTVShowEpisode, 
  fetchTVShowStreamingLinks
} from '../actions';
import {
  fetchTVShowMeta
} from '../../show/actions';
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
      fetchTVShowMeta,
      fetchTVShowEpisode,
      match
    } = this.props;

    fetchTVShowMeta(match.params.id);
    fetchTVShowEpisode(match.params.id, match.params.season, match.params.episode);
  }

  componentWillReceiveProps(nextProps) {
    const { 
      episode,
      show,
      fetchTVShowStreamingLinks
    } = nextProps;

    if (show && show._meta && episode && !episode.streamingLinks) {
      fetchTVShowStreamingLinks(show._meta.name, episode);
    }
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

        <Row>
          <Col s={12}>
            { !episode.streamingLinks &&  "Searching for streaming links..."}
          </Col>
        </Row>
        
        {
          (episode.streamingLinks && episode.streamingLinks.length > 0) &&
          <Row>
            <Col s={12}>
              <h5>Watch NOW!</h5>
              {
                episode.streamingLinks.map((provider, index) => {
                  return (
                    <div key={ index }>
                      <p style={{ padding: '0.75rem 0' }}>Provider { index + 1 }</p> 
                      <table className="striped">
                        <tbody>
                          {
                            provider.map((link, key) =>
                              <tr key={ key }>
                                <td width="30%">{ link.title }</td>
                                <td width="70%">
                                  <a href={ link.link } target="_blank">Click here to watch now!</a>
                                </td>
                              </tr>
                            )
                          }
                        </tbody> 
                      </table>
                    </div>
                  );
                })
              }
            </Col>
          </Row>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episode: state.episode,
  show: state.show,
});

const mapDispatchToProps = dispatch => ({
  fetchTVShowEpisode: (id, season, episode, callback) => dispatch(fetchTVShowEpisode(id, season, episode, callback)),
  fetchTVShowStreamingLinks: (name, episode) => dispatch(fetchTVShowStreamingLinks(name, episode)),
  fetchTVShowMeta: (params, callback) => dispatch(fetchTVShowMeta(params, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Episode);