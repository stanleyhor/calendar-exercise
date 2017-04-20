function theEvent(state = [], action) {
  switch(action.type) {
    case 'INIT_THEEVENT_DATA': {
      return action.data;
    }
    case 'UPDATE_THEEVENT': {
      return action.data;
    }
    default:
      return state;
  }
}

export default theEvent;