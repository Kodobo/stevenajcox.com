import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import SidebarContainer from "./SidebarContainer";

export default class RightSidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <Sidebar header="Linked Content">
          <a href="#">Somewhere</a>
          <br />
          <a href="#">Over</a>
          <br />
          <a href="#">The</a>
          <br />
          <a href="#">Rainbow</a>
        </Sidebar>
        <Sidebar header="Recent Tweets">
          <p>Nothing here yet...</p>
        </Sidebar>
      </SidebarContainer>
    )
  }
}