import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import SidebarContainer from "./SidebarContainer";
import photo from "../assets/stevencox.jpg";
import * as Content from "../content/StaticContent";
import './LeftRightSidebar.css';
import { generateParagraphs } from '../helpers'

export default class LeftSidebar extends Component {
  render() {
    return (
      <>
        <div className="LeftSidebar">
          <SidebarContainer>
            <Sidebar header="Steven Cox">
              <img src={photo} className="sidebar-photo"/>
            </Sidebar>
            <Sidebar header="Welcome!" style="secondary-text">
              {generateParagraphs(Content.Welcome)}
            </Sidebar>
          </SidebarContainer>
        </div>
        <div className="LeftSidebarGradient" />
        </>
    )
  }
}