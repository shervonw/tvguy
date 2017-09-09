import { 
  FETCH_TV_SHOW_DATA,
} from './actions/actionTypes';

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TV_SHOW_DATA:
      return Object.assign({}, state, { ...action.payload });
    default:
      return state;
  }
}