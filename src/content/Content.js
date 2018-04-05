import React, { Component } from 'react';
import './Content.css';
import Filter from "../eventFilter/index.js"
import EventSearch from "../eventSearch/index.js"

class Content extends Component {
  render() {
    return (
        <div id="content">
            <Filter
                blocks={window.eventFilterBlocks}
            />
            <EventSearch/>
      </div>
    );
  }
}

export default Content;
