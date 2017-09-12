import tvmaze from '../../api';
import { QUERY_FOR_TV_SHOWS } from './actionTypes';


const queryForTVShows = (query, callback) => dispatch => {

  tvmaze({ "query": query }, (err, res) => {
    if (!err) {
      const shows = res.body;

      dispatch({ 
        type: QUERY_FOR_TV_SHOWS, 
        payload: shows 
      });
      
      if (callback)
        callback(res.body);
    }
  });
}

export default queryForTVShows;