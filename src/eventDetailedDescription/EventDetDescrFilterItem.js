import React, { Component } from 'react';
import './index.css';


class EventDetDescrFilterItem extends Component {

    render() {
        return (
            <div className="eventDetailedDescription__filtersBlock__filterItem">
                <span className="underline">{this.props.type}:</span><span> {this.props.text}</span>
                <span className="eventDetailedDescription__filtersBlock__filterItem__numberOfFlights">
                    #{this.props.numberOfFlights}
                                </span>
            </div>
        );
    }
}

export default EventDetDescrFilterItem;
