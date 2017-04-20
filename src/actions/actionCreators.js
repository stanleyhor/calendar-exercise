//************* lecturer section ***************
export function initEventsData(dataType, data) {
  return {
    type: 'INIT_EVENTS_DATA',
    dataType,
    data
  }
}

export function addEventsData(data) {
  return {
    type: 'ADD_EVENTS',
    data
  }
}

export function initDayData(dataType, data) {
  return {
    type: 'INIT_DAY_DATA',
    dataType,
    data
  }
}

export function updateDayData(dataType, data) {
  return {
    type: 'UPDATE_DAY',
    dataType,
    data
  }
}

export function initTheEventData(dataType, data) {
  return {
    type: 'INIT_THEEVENT_DATA',
    dataType,
    data
  }
}

export function updateTheEventData(dataType, data) {
  return {
    type: 'UPDATE_THEEVENT',
    dataType,
    data
  }
}