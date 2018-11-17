import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-bar">
          <h1>Steven AJ Cox</h1>
          <p>Sharing best practice, ideas and opinions from around the world</p>
        </div>
        <div className="main-body">
          <Sidebar/>
          <div className="body-content">
            content
          </div>
          <Sidebar/>
        </div>
      </div>
    );
  }
}

export default App;
