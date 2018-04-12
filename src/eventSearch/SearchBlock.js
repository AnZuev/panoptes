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
import './index.css';

class SearchBlock extends Component {

    render() {
        return (
            <p id="eventSearch__searchBlock">
                <img src="/imgs/searchIcon.svg"/>
                <div className="blockTenPXWidth"></div>
                <input type="text" placeholder="Search" onChange={window.eventSearch.updateSearch.bind(this)}></input>
            </p>
        );
    }
}

export default SearchBlock;

