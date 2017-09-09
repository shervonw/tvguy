import tvmaze from '../../api';
import { 
  FETCH_TV_SHOW_DATA,
} from './actionTypes';

const fetchTVShowData = (id, callback) => dispatch => {

  tvmaze({ "tvmazeId": id }, (err, res) => {
    if (!err) {
      const show = res.body;

      dispatch({ 
        type: FETCH_TV_SHOW_DATA, 
        payload: show 
      });
      
    }
  });
}

export default fetchTVShowData;