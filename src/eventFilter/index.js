import React, { Component } from 'react';
import './index.css';
import EventFilterItem from "./EventFilterItem.js"

class EventFilter extends Component {
  constructor(props){
      super(props);
      // props.blocks has to store: [{title: "title", items:["item1", "item2"...]}]
      // see window.eventFilterBlocks for details
      window.eventFilter = this;

  }
  render() {
    let blocks = [];
    this.props.blocks.forEach((block) => {
        blocks.push(<span className="grayText">{block.title}</span>);
        block.items.forEach((item) => {
            let filter = <EventFilterItem title={item}/>;
            blocks.push(filter);
        });
        if(this.props.blocks.indexOf(block) !== this.props.blocks.length - 1){
            blocks.push(<div className="blockTenPXHeight"></div>);
        }
    });
    return (
      <div id="eventFilter">
          {blocks}
      </div>
    );
  }
}

export default EventFilter;
