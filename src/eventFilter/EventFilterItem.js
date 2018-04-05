import React, { Component } from 'react';
import './index.css';

class EventFilterItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            checked: false
        };
        this.changeCheckedState = this.changeCheckedState.bind(this);
    }

    changeCheckedState(){
        this.setState({
            checked: !this.state.checked
        });
    }
    render() {
        return (
            <p className={"darkBlueText eventFilter__item "  + (this.state.checked ? "eventFilter__item__checked" : "")} onClick={this.changeCheckedState}>
                {this.state.title}
                <span className="textAlignRight eventFilter__wrapper">
                    <p className="eventFilter__checkbox"></p>
                </span>
            </p>
        );
    }
}

export default EventFilterItem;
