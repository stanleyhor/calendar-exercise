import React, {PureComponent, PropTypes} from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';

import './EventDetailOverlay.css';
import { getDeltaDay } from '../utils';

export default class EventDetailOverlayNew extends PureComponent {
    static propTypes = {
        onClose: PropTypes.func.isRequired
    }

    state = {
        color: 'sky',
        eventDate: new Date(this.props.day),
        eventTime: new Date(),
        title: '',
        description: ''
    };

    componentWillMount() {
        document.addEventListener("keydown", this.props.onKeyPress.bind(this));
    }

    _handleDatePickerChange(id, nil, value) {
        this.setState({
            [id]: value
        });
    }

    _handleSelectChange(event, index, value) {
        this.setState({
            color: value
        });
    }

    _handleTextChange(id, event, value) {
        this.setState({
            [id]: value
        });
    }
    _handleSubmit() {
        let { color, eventDate, title, description, eventTime } = this.state;
        let { events } = this.props;

        const dayDelta = getDeltaDay(eventDate.getTime(), Date.now());
        const id = (events.slice(-1)[0]).id + 1;
        const hours = 1;    // assume event is always 1 hour
        const start = eventTime.getTime();

        this.props.addEventsData({id, title, description, start, hours, dayDelta, color});
        this.props.updateTheEventData('theEvent', {selectedEventId:undefined});
    }

    render() {
        // TODO: currently assuming event is only 1 hour
        let {onClose} = this.props;
        let {color, eventDate, title, description, eventTime} = this.state;
        return (
            <div className="event-detail-overlay-background" aria-label="New Event Details" onClick={onClose}>
                <section className="event-detail-overlay event-detail-overlay-new">
                    <div className={`event-detail-overlay__container event-detail-overlay--${color}`}>
                        <button
                            aria-label="Close"
                            className="event-detail-overlay__close"
                            title="Close detail view"
                            onClick={onClose}
                        />
                        <div>
                            <div className="event-detail-overlay-form-inline">
                                <label htmlFor="eventDate">Date:</label>
                                <DatePicker hintText="Event Date" defaultDate={eventDate} onChange={this._handleDatePickerChange.bind(this, 'eventDate')} />
                            </div>
                            <div className="event-detail-overlay-form-inline">
                                <label htmlFor="eventTime">Time:</label>
                                <TimePicker hintText="Event Time" defaultTime={eventTime} onChange={this._handleDatePickerChange.bind(this, 'eventTime')} />
                            </div>
                        </div>
                        <div>
                            <SelectField
                                floatingLabelText="Color"
                                value={color}
                                onChange={this._handleSelectChange.bind(this)}
                            >
                                <MenuItem value="sky" primaryText="Sky" />
                                <MenuItem value="canary" primaryText="Canary" />
                                <MenuItem value="rose" primaryText="Rose" />
                                <MenuItem value="shamrock" primaryText="Shamrock" />
                            </SelectField>
                        </div>
                        <div>
                            <TextField
                                floatingLabelText="Title"
                                onChange={this._handleTextChange.bind(this, 'title')}
                                defaultValue={title}
                            />
                        </div>
                        <div>
                            <TextField
                                floatingLabelText="Description"
                                multiLine={true}
                                rows={2}
                                onChange={this._handleTextChange.bind(this, 'description')}
                                defaultValue={description}
                            />
                        </div>
                        <div>
                            <button className="event-detail-overlay-add-btn" aria-label="submit button" onClick={this._handleSubmit.bind(this)}>Add</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
