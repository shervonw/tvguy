import tvmaze from '../../api';
import { 
  FETCH_TV_SHOW_META,
  FETCH_TV_SHOW_PREV_EPISODE,
  FETCH_TV_SHOW_NEXT_EPISODE,
  FETCH_TV_SHOW_SEASONS
} from './actionTypes';

const fetchTVShowMeta = (id, callback) => dispatch => {

  tvmaze({ "tvmazeId": id }, (err, res) => {
    if (!err) {
      const show = res.body;

      dispatch({ 
        type: FETCH_TV_SHOW_META, 
        payload: show 
      });

      if (show._links.previousepisode) {
        tvmaze({ "fetch" : show._links.previousepisode.href }, (err, res) => {
          dispatch({ 
            type: FETCH_TV_SHOW_PREV_EPISODE, 
            payload: res.body 
          });
        });
      }

      if (show._links.nextepisode) {
        tvmaze({ "fetch" : show._links.nextepisode.href }, (err, res) => {
          dispatch({
            type: FETCH_TV_SHOW_NEXT_EPISODE, 
            payload: res.body
          });
        });
      }
    }
  });

  tvmaze({ "getAllSeasons": id }, (err, res) => {
    if (!err) {
      dispatch({
        type: FETCH_TV_SHOW_SEASONS,
        payload: res.body
      });
    }
  });

}

export default fetchTVShowMeta;