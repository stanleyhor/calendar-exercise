function day(state = [], action) {
  switch(action.type) {
    case 'INIT_DAY_DATA': {
      return action.data;
    }
    case 'UPDATE_DAY': {
      return action.data;
    }
    default:
      return state;
  }
}

export default day;