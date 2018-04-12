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
import EventDetDescrFilterItem from "./EventDetDescrFilterItem.js"
import FadeIn from "react-fade-in";

class EventDetailsFilters extends Component {
    constructor(props){
        super(props);
        this.filters = [
            {
                type: 'From',
                value: null
            },
            {
                type: "Take off",
                value: null
            },
            {
                type: "To",
                value: null
            },
            {
                type: "Status",
                value: null
            }
        ];
        this.state = {
            blocks:[],
            search: [<span>Search</span>],
            inputValue: ""
        };
        this.lastInputValue = "";
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }

    componentDidMount(){
        window.eventDetailsFilters = this;
    }

    onChangeHandler(e) {
        this.lastInputValue = e.target.value;
        this.setState({
            inputValue: e.target.value
        });
        let values = e.target.value.split(":");
        if(values.length < 2){
            return;
        }

        let [type, text] = values;

        if(!this.checkIfTypeExists(type)){
            console.log("Type doesn't exist");
            return;
        }
        console.log(e.target.value)


    }

    handleKeyPress (e){
        if (e.key === 'Enter') {
            let blocks = this.state.blocks;
            console.log(e.target.value);
            let values = this.lastInputValue.split(":");
            let [type, text] = values;
            if(values.length === 3){
                text = values.slice(1).join(":")
            }
            let nof = 25 - blocks.length*2 - blocks.length%3 - 1;
            blocks.push([type, text, nof]);
            this.setState({
                blocks: blocks
            });
            this.setState({
                inputValue: ""
            });
            console.log(this.state.blocks)
        }
    };


    checkIfTypeExists(type){
        return (this.filters.map((item) => item.type).indexOf(type) >= 0)
    }



    render() {

        let blocks = this.state.blocks.map((item) => {
           return (<EventDetDescrFilterItem type={item[0]} text={item[1]} numberOfFlights={item[2]}/>)
        });
        if(blocks.length === 0){
            blocks.push(<div></div>);
            blocks.push(<div></div>);
        }
        let classes = ['eventDetailedDescription__filtersBlock'];
        return (
                <div className={classes.join(" ")}>
                    <div className="eventDetailedDescription__filtersBlockBlock">
                        <p className="eventDetailedDescription__filtersBlockTitle">Filters</p>
                        <FadeIn>
                            {blocks}
                        </FadeIn>
                        <p className="eventDetailedDescription__filtersBlock__searchBlock">
                            <div className="blockTenPXWidth"></div>
                            <input className="eventDetailedDescription__filtersBlock__searchBlockInput" placeholder="Type..." value={this.state.inputValue} onChange={this.onChangeHandler} onKeyPress={this.handleKeyPress}/>

                        </p>

                        <div className="eventDetailedDescription__filtersBlock__hints hidden">
                            <div className="eventDetailedDescription__filtersBlock__hintItem">
                                <img src="/imgs/pinkRectangle.svg" alt=""/>
                                <span>CDG, <span className="bold">Par</span>is, France</span>
                                <span className="eventDetailedDescription__filtersBlock__hintItem__numberOfFlights">
                                #9
                            </span>
                            </div>
                            <div className="eventDetailedDescription__filtersBlock__hintItem">
                                <img src="/imgs/pinkRectangle.svg" alt=""/>
                                <span>CDG, <span className="bold">Par</span>is, France</span>
                                <span className="eventDetailedDescription__filtersBlock__hintItem__numberOfFlights">
                                #9
                            </span>
                            </div>
                            <div className="eventDetailedDescription__filtersBlock__hintItem">
                                <img src="/imgs/pinkRectangle.svg" alt=""/>
                                <span>CDG, <span className="bold">Par</span>is, France</span>
                                <span className="eventDetailedDescription__filtersBlock__hintItem__numberOfFlights">
                                #9
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}

export default EventDetailsFilters;

