import React, {Component} from 'react';
import { StyledSidebar } from './styles/Sidebar';


export default class Sidebar extends Component {
  renderHeaderOrNull() {
    return this.props.header ? <h3>{this.props.header}</h3> : null;
  }

  render() {
    return (
      <StyledSidebar>
        {this.renderHeaderOrNull()}
        <div className={this.props.style}>
          {this.props.children}
        </div>
      </StyledSidebar>
    )
  }
}