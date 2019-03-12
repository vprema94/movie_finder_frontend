import { combineReducers } from 'redux';
import changingRenders from './changingRenders';
import changingMovies from './changingMovies';

 const rootReducer = combineReducers({
  renders: changingRenders,
  movies: changingMovies
});

export default rootReducer