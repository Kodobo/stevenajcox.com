import React, { Component } from 'react';
import { StyledSidebarContainer } from './styles/Sidebar';


export default class SidebarContainer extends Component {
  render() {
    return (
      <StyledSidebarContainer>
        {this.props.children}
      </StyledSidebarContainer>
    )
  }
}