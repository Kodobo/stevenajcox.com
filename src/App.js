import React, { Component } from 'react';
import './App.css';
import SidebarContainer from './components/SidebarContainer';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import photo from './assets/stevencox.jpg';
import * as Content from './content/StaticContent';

class App extends Component {
  generateParagraphs = content => {
    return content.map(sentence => <p>{sentence}</p>);
  };

  render() {
      return (
          <Router>
              <div className="App">
                  <Navbar/>
                  <div className="header-bar">
                      <h1>Steven AJ Cox</h1>
                      <p>Sharing best practice, ideas and opinions from around the world</p>
                  </div>
                  <div className="main-body">
                    <SidebarContainer>
                      <Sidebar header="Steven Cox">
                        <img src={photo} className="sidebar-photo"/>
                      </Sidebar>
                      <Sidebar header="Welcome!" style="secondary-text">
                        {this.generateParagraphs(Content.Welcome)}
                      </Sidebar>
                    </SidebarContainer>
                    <Route exact path="/" component={Home}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/contact" component={Contact}/>
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
                  </div>
              </div>
          </Router>
      );
  }
}

export default App;
