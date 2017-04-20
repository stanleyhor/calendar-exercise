const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

/**
 * Get the delta in Days between the two inputs
 * @param timestamp1
 * @param timestamp2
 * @returns {number}
 */
export const getDeltaDay = (timestamp1, timestamp2) => {
    return Math.floor((new Date(timestamp1)).getDate() - (new Date(timestamp2)).getDate());
};


/**
 * Given a list of events and a date, filter the events down to those that
 * fall on the same day as the date
 * @param {array} events - List of event objects
 * @param {Date} timestamp - The timestamp representing the day to match
 * @returns {array}
 */
export const filterEventsByDay = (events, timestamp) => {
    let delta = getDeltaDay(timestamp, Date.now());  //Math.floor((new Date(timestamp)).getDate() - (new Date()).getDate());
    let allE =  events.filter((event) => {
        return event.dayDelta === delta;
    });
    return allE;
}

/**
 * Given a list of events and an hour number, filter the events down to those that
 * start on the specified hour
 * @param {array} events - List of event objects
 * @param {number} hour - The hour to match (0 - 23)
 * @param {array}
 * @returns {array}
 */
export const filterEventsByHour = (events, hour) => (
    events.filter(({start}) => (
        new Date(start)).getHours() === hour
    )
);

/**
 * Given a numerical timestamp, returns the formatted date string w/o time component
 * @param {number} timestamp - The date to format
 * @returns {string} The formatted date
 */
export const getDisplayDate = (timestamp) => {
    let date = new Date(+timestamp);
    return date.toLocaleString('en-US', dateOptions);
};

/**
 * Given an hour number, returns a display string version
 * @param {number} hour - The hour
 * @returns {string}
 */
export const getDisplayHour = (hour) => {
    let theHour = hour%12 || 12;
    theHour = theHour > 12 ? (theHour - 12) : theHour;
    return theHour + (hour > 12 ? 'PM' : 'AM');
}

/**
 * Given a list of events, returns the event object whose id matches the specified eventId
 * @param {array} events - List of event objects
 * @param {number} eventId - ID of event to find
 * @returns {object}
 */
export const getEventFromEvents = (events, eventId) => (
    // eventId ===999999 indicates adding new event
    events.find(({id}) => (id === eventId || eventId===999999))
)

/**
 * Compare the event date and the current date, returns true if the event has past
 * @param {object} event - the date of the event
 * @param {Date} now - current date
 * @returns {boolean}
 */
export const isEventPast = (event) => {
    const now = new Date();
    if (event.dayDelta < 0) {
        return true;
    }
    if (event.dayDelta === 0 && now.getHours() > (new Date(event.start)).getHours()) {
        return true;
    }
    return false;
}