import { 
  FETCH_TV_SHOW_EPISODE,
  FETCH_TV_SHOW_STREAMING_LINKS
} from './actions/actionTypes';

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TV_SHOW_EPISODE:
      return Object.assign({}, state, { ...action.payload });
    case FETCH_TV_SHOW_STREAMING_LINKS:
      return Object.assign({}, state, { streamingLinks: action.payload });
    default:
      return state;
  }
}