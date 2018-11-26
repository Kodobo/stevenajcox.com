import React, { Component } from 'react';
import './SidebarContainer.css';

export default class SidebarContainer extends Component {
  render() {
    return (
      <div class="sidebar-container">
        {this.props.children}
      </div>
    )
  }
}