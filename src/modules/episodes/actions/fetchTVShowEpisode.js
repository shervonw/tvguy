import tvmaze from '../../api';
import { FETCH_TV_SHOW_EPISODE } from './actionTypes';

const fetchTVShowEpisode = (id, season, episode, callback) => dispatch => {

  tvmaze({

    "getEpisodeInSeason": id,
    "seasonNumber": season,
    "episodeNumber": episode

  }, (err, res) => {

    if (!err) {
      dispatch({ 
        type: FETCH_TV_SHOW_EPISODE, 
        payload: res.body 
      });

      if (callback)
        callback(res.body);
    }
    
  });

}

export default fetchTVShowEpisode;
