import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { 
  showReducer as show,
  showsReducer as shows,
  episodeReducer as episode 
} from './modules';

const rootReducer = combineReducers({ router, show, shows, episode });

export default rootReducer;