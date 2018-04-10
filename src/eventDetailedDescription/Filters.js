"use strict";

/**
 * Part of panoptes
 * Created by Anton Zuev on 04/04/2018.
 *
 * Contacts:
 * - mail: anzuev@bk.ru
 * - telegram: @anzuev
 * - github: @AnZuev
 */

import React, { Component } from 'react';

class EventDetailsFilters extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="eventDetailedDescription__filtersBlock">
                <div className="eventDetailedDescription__filtersBlockBlock">
                    <p className="eventDetailedDescription__filtersBlockTitle">Filters</p>
                </div>
            </div>
        );
    }
}

export default EventDetailsFilters;

