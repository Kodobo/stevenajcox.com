import React, { Component } from "react";
import NavBar from './Navbar';
import { StyledHeaderBar, HeaderBarRouterLink, HeaderTitle } from './styles/HeaderBar';

export default class HeaderBar extends Component {
  render() {
    return (
      <StyledHeaderBar>
        <HeaderBarRouterLink to="/">
          <HeaderTitle>Steven AJ Cox</HeaderTitle>
          <p>Sharing best practice, ideas and opinions from around the world</p>
        </HeaderBarRouterLink>
        <NavBar />
      </StyledHeaderBar>
    )
  }
}