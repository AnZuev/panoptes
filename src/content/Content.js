import React, { Component } from 'react';
import './Content.css';
import Filter from "../eventFilter/index.js"
import EventSearch from "../eventSearch/index.js"
import EventDetailedDescription from "../eventDetailedDescription/index.js"
import EventDetailsFilters from "../eventDetailedDescription/Filters.js"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import FadeIn from 'react-fade-in'

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            event: window.events[0],
            showEventFilter: false
        };
        window.content = this;
        this.toggleEventFilter = this.toggleEventFilter.bind(this);
    }
    toggleEventFilter(){
        this.setState({
            showEventFilter: !this.state.showEventFilter
        })
    }
    showEventFilter(){
        this.setState({showEventFilter: true})
    }
    hideEventFilter(){
        this.setState({showEventFilter: false})
    }
    render() {
        let block = null;
        if(this.state.showEventFilter){
            block = (<FadeIn>
                <EventDetailsFilters flights={this.state.event.flights} />
            </FadeIn>)
        }
        return (
            <div id="content">
                <Filter
                    blocks={window.eventFilterBlocks}
                />
                <EventSearch/>
                <EventDetailedDescription
                    title={this.state.event.title}
                    itemId={`${this.state.event.short_type}-${this.state.event.id}`}
                    flights={this.state.event.flights}
                    logs={this.state.event.logs}
                    details={this.state.event.details}
                />
                {block}

            </div>
        );
    }
}

export default Content;
