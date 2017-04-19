import React, {PureComponent} from 'react';
import Calendar from './Calendar';
import EventDetailOverlay from './EventDetailOverlay';
import {filterEventsByDay, getEventFromEvents, getDisplayDate} from '../utils';
import DATA_SET from '../utils/data';
import { MILLISECONDS_DAY, ESC_KEY } from '../utils/constants';

import './Page.css';

const DayNavigator = ({dateDisplay, onPrev, onNext}) => {
    return (
        <nav className="page__nav">
            <button
                className="page__nav-button page__prev-day"
                title="Go to previous day"
                onClick={onPrev}
            />
            <h2 className="page__date">{dateDisplay}</h2>
            <button
                className="page__nav-button page__next-day"
                title="Go to next day"
                onClick={onNext}
            />
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

    _handlePrev() {
        let currentDate = new Date();
        currentDate.setTime(this.props.day - MILLISECONDS_DAY);
        this.props.updateDayData('day', currentDate.getTime());
    }

    _handleNext() {
        let currentDate = new Date();
        currentDate.setTime(this.props.day + MILLISECONDS_DAY);
        this.props.updateDayData('day', currentDate.getTime());
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
            eventDetailOverlay = (
                <EventDetailOverlay
                    event={selectedEvent}
                    onClose={this._handleEventDetailOverlayClose.bind(this)}
                    onKeyPress={this._handleKeyPress.bind(this)}
                />
            );
        }

        return (
            <div className="page">
                <header className="page__header">
                    <h1 className="page__title">Daily Agenda</h1>
                </header>
                <DayNavigator
                    dateDisplay={getDisplayDate(day)}
                    onPrev={this._handlePrev.bind(this)}
                    onNext={this._handleNext.bind(this)}
                />
                <Calendar events={filteredEvents} onSelectEvent={this._handleSelectEvent.bind(this)} />
                {eventDetailOverlay}
            </div>
        );
    }
}
