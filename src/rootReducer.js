import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { showReducer as show } from './modules';
import { episodeReducer as episode } from './modules';

const rootReducer = combineReducers({ router, show, episode });

export default rootReducer;