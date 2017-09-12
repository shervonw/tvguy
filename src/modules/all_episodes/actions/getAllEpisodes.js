import tvmaze from '../../api';
import { GET_ALL_EPISODES } from './actionTypes';


const getAllEpisodes = (id, callback) => dispatch => {

  tvmaze({ "getAllEpisodes": id }, (err, res) => {
    if (!err) {
      dispatch({ 
        type: GET_ALL_EPISODES, 
        payload: res.body 
      });

      if (callback)
        callback(res.body);
      
    }
  });

}

export default getAllEpisodes;