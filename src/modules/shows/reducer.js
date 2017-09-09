import { QUERY_FOR_TV_SHOWS } from './actions/actionTypes';

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case QUERY_FOR_TV_SHOWS:
      return Object.assign([], state, [ ...action.payload ]);
    default:
      return state;
  }
}