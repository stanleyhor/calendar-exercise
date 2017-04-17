import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';
import { isEventPast } from '../utils';

import './TimeSlotEvent.css';

export default class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onSelect: PropTypes.func.isRequired
    }
    
    getEventState() {
        const { hour } = this.props;
        const isEventOver = isEventPast(hour, new Date());
        if (isEventOver) {
            return 'time-slot-event--past';
        }
        return '';
    }

    render() {
        let {
            event: {title, color},
            onSelect,
        } = this.props;

        return (
            <button className={`time-slot-event time-slot-event--${color} ${this.getEventState()}`} onClick={onSelect}>
                {title}
            </button>
        );
    }
}
