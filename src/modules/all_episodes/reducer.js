import { GET_ALL_EPISODES } from './actions/actionTypes';

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EPISODES: 
      return Object.assign({}, state, { ...action.payload });
    default:
      return state;
  }
}