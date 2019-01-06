import React, { Component } from 'react';
import './SidebarContainer.css';

export default class SidebarContainer extends Component {
  render() {
    return (
      <div className="sidebar-container">
        {this.props.children}
      </div>
    )
  }
}