import tvmaze from '../../api';
import { FETCH_TV_SHOW_STREAMING_LINKS } from './actionTypes';


const fetchTVShowStreamingLinks = (name, episode, callback) => dispatch => {

  const postData = {
    name: name,
    episodeName: episode.name,
    season: episode.season,
    episode: episode.number
  }

  tvmaze({ "getStreamLinks": JSON.stringify(postData) }, (err, res) => {
    if (!err) {
      dispatch({ 
        type: FETCH_TV_SHOW_STREAMING_LINKS, 
        payload: res.body 
      });
    }
  });
  
}
  
export default fetchTVShowStreamingLinks;