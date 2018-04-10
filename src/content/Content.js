import React, { Component } from 'react';
import './Content.css';
import Filter from "../eventFilter/index.js"
import EventSearch from "../eventSearch/index.js"
import EventDetailedDescription from "../eventDetailedDescription/index.js"


class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            event: window.events[0]
        }
    }
    render() {
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
            </div>
        );
    }
}

export default Content;
