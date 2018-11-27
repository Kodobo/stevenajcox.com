import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import SidebarContainer from "./SidebarContainer";
import photo from "../assets/stevencox.jpg";
import * as Content from "../content/StaticContent";

export default class LeftSidebar extends Component {
  generateParagraphs = content => {
    return content.map(sentence => <p>{sentence}</p>);
  };

  render() {
    return (
      <SidebarContainer>
        <Sidebar header="Steven Cox">
          <img src={photo} className="sidebar-photo"/>
        </Sidebar>
        <Sidebar header="Welcome!" style="secondary-text">
          {this.generateParagraphs(Content.Welcome)}
        </Sidebar>
      </SidebarContainer>
    )
  }
}