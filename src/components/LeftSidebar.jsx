import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import SidebarContainer from "./SidebarContainer";
import photo from "../assets/stevencox.jpg";
import { StyledLeftSidebar, SidebarImage, TwitterTimeline } from './styles/Sidebar';

export default class LeftSidebar extends Component {
  componentDidMount() {
    const twitterWidget = document.createElement('script');
    twitterWidget.type = 'text/javascript';
    twitterWidget.src = "https://platform.twitter.com/widgets.js";
    document.head.appendChild(twitterWidget);
  }

  render() {
    return (
      <StyledLeftSidebar>
        <SidebarContainer>
          <Sidebar header="Steven Cox">
            <SidebarImage src={photo} className="sidebar-photo"/>
          </Sidebar>
          <Sidebar>
            <TwitterTimeline className="twitter-timeline"
               data-theme="dark"
               data-height="800"
               data-link-color="#FAB81E"
               href="https://twitter.com/StevenAJC?ref_src=twsrc%5Etfw"
            >
              Tweets by StevenAJC
            </TwitterTimeline>
          </Sidebar>
        </SidebarContainer>
      </StyledLeftSidebar>
    )
  }
}