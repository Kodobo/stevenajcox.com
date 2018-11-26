import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SidebarContainer from './components/SidebarContainer';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Services from "./pages/Services";
import Contact from "./pages/Contact";

class App extends Component {
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
                        <Sidebar />
                      </SidebarContainer>
                      <Route exact path="/" component={Home}/>
                      <Route path="/blog" component={Blog}/>
                      <Route path="/services" component={Services}/>
                      <Route path="/contact" component={Contact}/>
                      <SidebarContainer>
                        <Sidebar/>
                        <Sidebar/>
                        <Sidebar/>
                      </SidebarContainer>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
