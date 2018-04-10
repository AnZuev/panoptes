import React, { Component } from 'react';
import './index.css';
import EventFilter from "./index";


class EventFilterItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            checked: false
        };
        this.changeCheckedState = this.changeCheckedState.bind(this);
    }

    changeCheckedState() {
        this.setState({
            checked: !this.state.checked
        });
    }

    onCLick() {
        this.changeCheckedState();
            if (!this.state.checked){
                if (this.state.title === 'By time' || this.state.title === 'By importance')
                {
                    window.ActiveSort.push(this.state.title)
                }else{
                    window.ActiveFilters.push(this.state.title)
                }

            }
            else {
                if (this.state.title === 'By time' || this.state.title === 'By importance')
                {
                    window.ActiveSort = window.ActiveSort.filter(item => item !== this.state.title)
                }else {
                    window.ActiveFilters = window.ActiveFilters.filter(item => item !== this.state.title)
                }
            }
            window.eventSearch.updateEvents();
        }

    render() {
        return (
            <p className={"darkBlueText eventFilter__item "  + (this.state.checked ? "eventFilter__item__checked" : "")} onClick={this.onCLick.bind(this)}>
                {this.state.title}
                <span className="textAlignRight eventFilter__wrapper">
                    <p className="eventFilter__checkbox"></p>
                </span>
            </p>
        );
    }
}

export default EventFilterItem;
