import React, {Component} from 'react';
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HeaderBar from './components/HeaderBar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faTwitter, faInstagram);

class App extends Component {
  render() {
      return (
          <Router>
              <div className="App">
                  <Navbar/>
                  <HeaderBar />
                  <div className="main-body">
                    <LeftSidebar />
                    <Route exact path="/" component={Home}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/contact" component={Contact}/>
                    <RightSidebar />
                  </div>
                  <Footer />
              </div>
          </Router>
      );
  }
}

export default App;
