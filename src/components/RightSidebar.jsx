import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import SidebarContainer from "./SidebarContainer";
import './LeftRightSidebar.css';

export default class RightSidebar extends Component {

  componentDidMount() {
    const twitterWidget = document.createElement('script');
    twitterWidget.type = 'text/javascript';
    twitterWidget.src = "https://platform.twitter.com/widgets.js";
    document.head.appendChild(twitterWidget);
  }

  render() {
    return (
      <>
        <div className="RightSidebarGradient" />
        <div className="RightSidebar">
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
                <a className="twitter-timeline"
                   data-theme="dark"
                   data-height="1080"
                   data-link-color="#FAB81E"
                   href="https://twitter.com/StevenAJC?ref_src=twsrc%5Etfw"
                >
                  Tweets by StevenAJC
                </a>
            </Sidebar>
          </SidebarContainer>
        </div>
      </>
    )
  }
}