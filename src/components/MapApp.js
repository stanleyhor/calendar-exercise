import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import App from './App';

function mapStateToProps(state, ownProps) {
  let location = ownProps.location.pathname;
  let day = state.day;
  if (location.indexOf('/event/')>-1) {
    day = location.replace(/\/event\//,'');
  }
  return {
    events: state.events,
    day: +day,
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