import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';

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
                        <Sidebar/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/blog" component={Blog}/>
                        <Sidebar/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
