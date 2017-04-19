import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import App from './App';

function mapStateToProps(state) {
  return {
    events: state.events,
    day: state.day,
    theEvent: state.theEvent
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(
    {},
    actionCreators
  ), dispatch);
}

const MapApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default MapApp;