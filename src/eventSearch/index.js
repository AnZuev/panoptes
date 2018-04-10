import React, { Component } from 'react';
import './index.css';
import SearchBlock from "./SearchBlock.js"
import SearchResultItem from "./SearchResultItem.js"
import DetailedDescription from "../eventDetailedDescription/index.js"


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
                return event.type === filter;
            });
            return filters.some((filter) => filter)
        });
    }

    updateEvents(){
        this.filter();
        this.sort();
        this.forceUpdate();
    }

    sort(){
        let time_cmp = (a, b) => {
            if (a.date > b.date ) {
                return -1;
            }
            if (a.date < b.date) {
                return 1;
            }
            return 0;
        };

        let importance_cmp = (a, b) => {
            if (a.flights.length > b.flights.length ) {
                return -1;
            }
            if (a.flights.length < b.flights.length) {
                return 1;
            }
            return 0;
        };

        let double_cmp = (a, b) => {
            let imp = importance_cmp(a, b);
            if (imp === 0){
                return time_cmp(a, b)
            }else {
                return imp
            }
        };

        let by_time = window.ActiveSort.includes('By time');
        let by_importance = window.ActiveSort.includes('By importance');

        if (by_time && by_importance){
            this.state.filteredEvents.sort(double_cmp)
        }else if(by_time) {
            this.state.filteredEvents.sort(time_cmp);
        }else if(by_importance) {
            this.state.filteredEvents.sort(importance_cmp);
        }
    }

    render() {
        let blocks = [];
        blocks.push();
        this.state.filteredEvents.forEach((item) => {
            blocks.push(<SearchResultItem
                id={item.id}
                type={item.short_type}
                title={item.title}
                date={item.date}
                numberOfFlights={item.flights.length}
            />)
        });
        if (blocks.length !== 0) {
            return (
                <div id="eventSearch">
                    <SearchBlock/>
                    {blocks}
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default EventSearch;
