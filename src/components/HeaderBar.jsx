import React, { Component } from "react";
import './HeaderBar.css';

export default class HeaderBar extends Component {
  render() {
    return (
      <div className="header-bar">
        <h1 className="header-title">Steven AJ Cox</h1>
        <p className="header-text">Sharing best practice, ideas and opinions from around the world</p>
      </div>
    )
  }
}