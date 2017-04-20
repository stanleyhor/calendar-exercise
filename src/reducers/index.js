import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import events from './events';
import day from './day';
import theEvent from './theEvent';

const rootReducer = combineReducers({
  events,
  day,
  theEvent,
  routing: routerReducer});

export default rootReducer;