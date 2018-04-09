import React, { Component } from 'react';
import './index.css';

class EventDetailedDescription extends Component {
    constructor(props){
        super(props);
        this.state = {
            chosen: false
        };
        this.choose = this.choose.bind(this);
        this.unchoose = this.unchoose.bind(this);
        window.eventDetails = this;
    }

    choose() {
        this.setState({
            chosen: true
        });
    }

    unchoose() {
        this.setState({
            chosen: false
        });
    }


    render() {
        let isChosen = "eventDetailedDescription-appear";
        if (!this.state.chosen) {
            isChosen = "eventDetailedDescription-disappear";
        }

        let flights_statuses = [];
        this.props.flights.forEach((flight) => {
            let status_class = "";
            if (flight.status === "Delayed") {
                status_class = "delayed_text_flight";
            }
            else if (flight.status === "Cancelled") {
                status_class = "cancelled_text_flight";
            }
            else if (flight.status === "On time") {
                status_class = "on_time_text_flight";
            }
            else if (flight.status === "Solve") {
                status_class = "solve_text_flight";
            }
            flights_statuses.push(<p className="eventDetailedDescription__timeBlockFlights"><span className="flight_code_text">{flight.id}</span> <span className="active_text_flight">{flight.from} <img id="flightArrow" src="https://cdn.shopify.com/s/files/1/1759/4609/t/15/assets/index.hero-link-arrow-black.png?14111992258315821421"/> {flight.to}</span> <span className="active_text_flight">{flight.time.getHours()}:{flight.time.getMinutes()}</span> <span className={status_class}> {flight.status}</span></p>);
        });

        let eventLogs = [];
        this.props.logs.forEach((log) => {
            eventLogs.push(<p className="eventDetailedDescription__logBlockHeader"><span className="eventDetailedDescription__logName">{log.from}</span><span className="eventDetailedDescription__logTime">{log.time.getHours()}:{log.time.getMinutes()}</span></p>);
            eventLogs.push(<p className="eventDetailedDescription__logText">{log.text}</p>)
        });



        return (
            <div className={`eventDetailedDescription ${isChosen}`}>
                <p className="eventDetailedDescription__header">
                    <span className="darkBlueText">{this.props.itemId}</span> {this.props.title}
                </p>
                <div className="eventDetailedDescription__detailed_info">
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
                            {flights_statuses.slice(0, 4)}
                            <p className="eventDetailedDescription__timeBlockHeader">16-18</p>
                            {flights_statuses.slice(4, 8)}
                            <p className="eventDetailedDescription__timeBlockHeader">18-20</p>
                            {flights_statuses.slice(8, 12)}
                        </div>
                    </div>
                    <div className="eventDetailedDescription__center">
                        <p className="eventDetailedDescription__sectionHeader">Logs</p>
                        <div>
                            {eventLogs}
                        </div>

                    </div>
                    <div className="eventDetailedDescription__right">
                        <p className="eventDetailedDescription__sectionHeader">Details</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventDetailedDescription;