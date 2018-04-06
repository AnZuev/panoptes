import React, { Component } from 'react';
import './index.css';

class EventDetailedDescription extends Component {
    constructor(props){
        super(props);

    }


    render() {
        return (
            <div id="eventDetailedDescription">
                <p className="eventDetailedDescription__header">
                    <span className="darkBlueText">{this.props.itemId}</span> {this.props.title}
                </p>
                <div className="eventDetailedDescription__left">
                    <div className="eventDetailedDescription__search">
                        <img src="/imgs/eventDetailsFilter.svg" alt="" className="eventDetailedDescription__filterIcon"/>
                        <p className="eventDetailedDescription__searchBlock">
                            <img src="/imgs/searchIcon.svg"/>
                            <div className="blockTenPXWidth"></div>
                            <input placeholder="Search"></input>
                        </p>
                    </div>
                    <div className="eventDetailedDescription__timeBlock">
                        <p className="eventDetailedDescription__timeBlockHeader">14-16</p>
                        <table className="eventDetailedDescription__timeBlockFlights">
                            <tbody>
                                <tr></tr>
                                <tr>
                                    <td>FA-537</td>
                                    <td>DME->CDG</td>
                                    <td>14:32</td>
                                    <td>Delayed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventDetailedDescription;