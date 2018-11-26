import React, {Component} from 'react';
import './Sidebar.css'

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="sidebar">
          <h3>{this.props.header}</h3>
          <div className={this.props.style}>
            {this.props.children}
          </div>
        </div>
      </>
    )
  }
}