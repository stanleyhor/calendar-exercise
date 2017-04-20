function events(state = [], action) {
  switch(action.type) {
    case 'INIT_EVENTS_DATA': {
      return action.data;
    }
    case 'ADD_EVENTS': {
      let newState = state.slice();
      newState.push(action.data);
      return newState;
    }
    default:
      return state;
  }
}

export default events;