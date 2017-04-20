import React, {PureComponent} from 'react';
import { Link } from 'react-router';

import Calendar from './Calendar';
import EventDetailOverlay from './EventDetailOverlay';
import EventDetailOverlayNew from './EventDetailOverlayNew';
import {filterEventsByDay, getEventFromEvents, getDisplayDate} from '../utils';
import DATA_SET from '../utils/data';
import { MILLISECONDS_DAY, ESC_KEY } from '../utils/constants';

import './Page.css';

const DayNavigator = ({day}) => {
    return (
        <nav className="page__nav">
            <Link to={'/event/'+(day-MILLISECONDS_DAY)}>
                <button
                    className="page__nav-button page__prev-day"
                    title="Go to previous day"
                />
            </Link>
            <h2 className="page__date">{getDisplayDate(day)}</h2>
            <Link to={'/event/'+(day+MILLISECONDS_DAY)}>
                <button
                    className="page__nav-button page__next-day"
                    title="Go to next day"
                />
            </Link>
        </nav>
    );
};

export default class Page extends PureComponent {
    componentWillMount() {
        this.props.initEventsData('events', DATA_SET);
        this.props.initDayData('day', Date.now());
        this.props.initTheEventData('theEvent', {selectedEventId: undefined});
    }

    _handleSelectEvent(selectedEventId) {
        this.props.updateTheEventData('theEvent', {selectedEventId});
    }

    _handleEventDetailOverlayClose(e) {
        if(e.target.className.indexOf('background')>-1 || e.target.className.indexOf('close')>-1) {
            this.props.updateTheEventData('theEvent', {selectedEventId:undefined});
        }
    }

    _handleKeyPress(event) {
        if(event.keyCode === ESC_KEY) {
            this.props.updateTheEventData('theEvent', {selectedEventId:undefined});
        }
    }

    render() {
        let {events, day, theEvent:{selectedEventId}} = this.props;
      
        let filteredEvents = filterEventsByDay(events, day);
        let selectedEvent = getEventFromEvents(events, selectedEventId);
        let eventDetailOverlay;

        if (selectedEvent) {
            if (selectedEventId===999999) {
                // adding a new event, used a high number to indicate adding new event
                eventDetailOverlay = (
                    <EventDetailOverlayNew
                        {...this.props}
                        onClose={this._handleEventDetailOverlayClose.bind(this)}
                        onKeyPress={this._handleKeyPress.bind(this)}
                    />
                );
            } else {
                eventDetailOverlay = (
                    <EventDetailOverlay
                        event={selectedEvent}
                        onClose={this._handleEventDetailOverlayClose.bind(this)}
                        onKeyPress={this._handleKeyPress.bind(this)}
                    />
                );
            }
        }

        return (
            <div className="page">
                <header className="page__header">
                    <h1 className="page__title">Daily Agenda</h1>
                    <button className="page__add-btn" onClick={this._handleSelectEvent.bind(this, 999999)}>Add</button>
                </header>
                <DayNavigator day={day} />
                <Calendar events={filteredEvents} onSelectEvent={this._handleSelectEvent.bind(this)} />
                {eventDetailOverlay}
            </div>
        );
    }
}
