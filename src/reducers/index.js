import { combineReducers } from 'redux';
import changingRenders from './changingRenders';

 const rootReducer = combineReducers({
  renders: changingRenders
});

export default rootReducer