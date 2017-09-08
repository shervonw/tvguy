import tvmaze from '../../api';
import { FETCH_TV_SHOW_NEXT_EPISODE } from './actionTypes';

const fetchTVShowNextEpisode = (params, callback) => dispatch => {

  tvmaze(params, (err, res) => {
    if (!err) {
      dispatch({ 
        type: FETCH_TV_SHOW_NEXT_EPISODE, 
        payload: res.body 
      });
    }
  });

}

export default fetchTVShowNextEpisode;