import { 
  FETCH_TV_SHOW_META,
  FETCH_TV_SHOW_NEXT_EPISODE,
  FETCH_TV_SHOW_PREV_EPISODE,
  FETCH_TV_SHOW_SEASONS
} from './actions/actionTypes';

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TV_SHOW_META:
      return Object.assign({}, state, { _meta: action.payload });
    case FETCH_TV_SHOW_NEXT_EPISODE:
      return Object.assign({}, state, { nextEpisode: action.payload });
    case FETCH_TV_SHOW_PREV_EPISODE:
      return Object.assign({}, state, { prevEpisode: action.payload });
    case FETCH_TV_SHOW_SEASONS:
      return Object.assign({}, state, { seasons: action.payload });
    default:
      return state;
  }
}