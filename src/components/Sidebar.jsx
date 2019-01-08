import React, {Component} from 'react';
import './Sidebar.css'

export default class Sidebar extends Component {
  renderHeaderOrNull() {
    return this.props.header ? <h3>{this.props.header}</h3> : null;
  }

  render() {
    return (
      <>
        <div className="sidebar">
          {this.renderHeaderOrNull()}
          <div className={this.props.style}>
            {this.props.children}
          </div>
        </div>
      </>
    )
  }
}