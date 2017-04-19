import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';
import {getDisplayDate, getDisplayHour} from '../utils';

import './EventDetailOverlay.css';

export default class EventDetailOverlay extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onClose: PropTypes.func.isRequired
    }

    componentWillMount() {
        document.addEventListener("keydown", this.props.onKeyPress.bind(this));
    }

    render() {
        let {event, onClose} = this.props;
        let {title, description, start, color, hours} = event;
        let displayDate = getDisplayDate(start);
        let startHour = (new Date(start)).getHours();

        // TODO: Fix. If hours was other than 1 the UI would break
        let endHour = startHour + hours;

        let startHourDisplay = getDisplayHour(startHour);
        let endHourDisplay = getDisplayHour(endHour);

        let displayDateTime = `${displayDate} ${startHourDisplay} - ${endHourDisplay}`;

        return (
            <div className="event-detail-overlay-background" aria-label="Event Details" onClick={onClose}>
                <section className="event-detail-overlay">
                    <div className="event-detail-overlay__container">
                        <button
                          aria-label="Close"
                            className="event-detail-overlay__close"
                            title="Close detail view"
                            onClick={onClose}
                        />
                        <div>
                            {displayDateTime}
                            <span
                                className={`event-detail-overlay__color event-detail-overlay--${color}`}
                                title={`Event label color: ${color}`}
                            />
                        </div>
                        <h1 className="event-detail-overlay__title">
                            {title}
                        </h1>
                        <p>{description}</p>
                    </div>
                </section>
            </div>
        );
    }
}
