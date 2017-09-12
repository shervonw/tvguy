import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Poster } from '../../show/components';
import { EpisodeList } from '../components';
import { getAllEpisodes } from '../actions';
import { fetchTVShowData } from '../../show/actions';


class AllEpisodes extends Component {

  componentWillMount() {
    const {
      fetchTVShowData,
      getAllEpisodes,
      match
    } = this.props;

    fetchTVShowData(match.params.id);
    getAllEpisodes(match.params.id);
  }

  render() {
    const { show, allEpisodes, match } = this.props;
    
    if (!allEpisodes || !show) {
      return false;
    }

    return (
      <div className="container">
        <Poster show={ show } />
        <EpisodeList
          id={ match.params.id }
          allEpisodes={ allEpisodes }
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  show: state.show,
  allEpisodes: state.allEpisodes,
});

const mapDispatchToProps = dispatch => ({
  getAllEpisodes: (id, callback) => dispatch(getAllEpisodes(id, callback)),
  fetchTVShowData: (id, callback) => dispatch(fetchTVShowData(id, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllEpisodes);
      