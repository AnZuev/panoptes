import React, { Component } from 'react';
import './index.css';
import SearchBlock from "./SearchBlock.js"
import SearchResultItem from "./SearchResultItem.js"

class EventSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            filteredEvents: window.events,
            events: window.events
        };
        window.eventSearch = this;
        this.data = {};

        this.filter();

    }
    setActive(searchResultItem){
        if(this.data.active ){
            this.data.active.unchoose();
        }
        this.data.active = searchResultItem;
    }

    filter(){
        this.state.filteredEvents = this.state.events.filter((event) => {

            let filters = window.ActiveFilters.map((filter) => {
                console.log(filter);
                return event.type === filter;
            });

            console.log(filters);
            return filters.some((filter) => filter)
        });

        this.forceUpdate();
    }

    render() {

        let blocks = [];
        this.state.filteredEvents.forEach((item) => {
            blocks.push(<SearchResultItem
                id={item.id}
                type={item.type}
                title={item.title}
                date={item.date}
                numberOfFlights={item.flights.length}
            />)
        });
        return (
            <div id="eventSearch">
                <SearchBlock/>
                {blocks}
            </div>
        );
    }
}

export default EventSearch;
