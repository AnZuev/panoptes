import React, { Component } from 'react';
import './index.css';

class EventDetailedDescription extends Component {
    constructor(props){
        super(props);
        this.state = {
            chosen: false
        };
        this.changeChosenState = this.changeChosenState.bind(this);
        window.eventDetails = this;
    }

    changeChosenState() {
        this.setState({
            chosen: !this.state.chosen
        });
    }


    render() {
        if (this.state.chosen) {
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
                                    <td>{this.props.flights[0].id}</td>
                                    <td>{this.props.flights[0].from} -> {this.props.flights[0].to}</td>
                                    <td>{this.props.flights[0].time.getHours()}:{this.props.flights[0].time.getMinutes()}</td>
                                    <td>Delayed</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }

        }
}

export default EventDetailedDescription;