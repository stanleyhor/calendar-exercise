function events(state = [], action) {
  switch(action.type) {
    case 'INIT_EVENTS_DATA': {
      return action.data;
    }
    default:
      return state;
  }
}

export default events;