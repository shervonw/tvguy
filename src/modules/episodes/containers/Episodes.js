import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Summary } from '../../core/components';
import { 
  fetchTVShowEpisode, 
  fetchTVShowStreamingLinks
} from '../actions';
import {
  fetchTVShowData
} from '../../show/actions';
import {
  Preloader, Row, Col
} from 'react-materialize';
import {
  EpisodePoster,
} from '../components';


class Episode extends Component {
  state = {
    isSearchingForStreamingLinks: true
  }

  componentWillMount() {
    const {
      fetchTVShowData,
      fetchTVShowEpisode,
      match
    } = this.props;

    fetchTVShowData(match.params.id);
    fetchTVShowEpisode(match.params.id, match.params.season, match.params.episode);
  }

  componentWillReceiveProps(nextProps) {
    const { 
      episode,
      show,
      fetchTVShowStreamingLinks
    } = nextProps;

    const { isSearchingForStreamingLinks } = this.state;

    if (show && episode && !episode.streamingLinks && isSearchingForStreamingLinks) {

      fetchTVShowStreamingLinks(show.name, episode, (links) => {
        if (links.length === 0) {
          const message = `We are unable to provide streaming links for ${episode.name}`;
          window.Materialize.toast(message, 4000);
        }
      });

      this.setState({
        isSearchingForStreamingLinks: false
      });

    }
  }

  render() {
    const { episode } = this.props;
    
    if (!episode) {
      return false;
    }

    const summary = episode.summary || '<div />';

    return (
      <div className="container">
        
        <EpisodePoster episode={ episode } />

        <Row>
          <Col s={12}>
            <Summary summary={ summary } summaryStyle={{ marginTop: 50, marginBottom: 50 }} />
          </Col>
        </Row>

        <Row>
          <Col s={12}>
            { 
              !episode.streamingLinks && 
              <div style={{ display: 'flex', alignItems: 'center', }}>
                <p style={{ paddingRight: 16 }}>Searching for streaming links...</p>
                <Preloader size='small'/>
              </div>
            }
          </Col>
        </Row>
        
        {
          (episode.streamingLinks && episode.streamingLinks.length > 0) &&
          <Row>
            <Col s={12}>
              <h5>Watch NOW!</h5>
              <div className="divider"></div>
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
  fetchTVShowStreamingLinks: (name, episode, callback) => dispatch(fetchTVShowStreamingLinks(name, episode, callback)),
  fetchTVShowData: (params, callback) => dispatch(fetchTVShowData(params, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Episode);