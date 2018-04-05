import React, { Component } from 'react';
import './App.css';
import Content from "./content/Content.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img id='headerLogo' src='/imgs/logo.svg'/>
          <img id='headerLogout' src='/imgs/logout.svg'/>
          <img id='headerProfile' src='/imgs/profile.svg'/>
        </header>
        <Content />
      </div>
    );
  }
}

export default App;
