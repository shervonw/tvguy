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
      
    }
  });
}

export default queryForTVShows;