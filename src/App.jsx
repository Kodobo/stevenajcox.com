import React, {Component} from 'react';
import { MainBody } from './styles/App';
import Footer from './components/Footer'
import {BrowserRouter as Router, Route} from "react-router-dom";
import HeaderBar from './components/HeaderBar';
import Home from './pages/Home';
import Insights from './pages/Insights';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LeftSidebar from './components/LeftSidebar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHome, faLightbulb, faHandshake, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { PATHS } from "./globalConstants/paths";

library.add(faLinkedin, faTwitter, faInstagram, faHome, faLightbulb, faHandshake, faAddressCard);

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderBar />
          <MainBody>
            <LeftSidebar />
            <Route exact path={`${PATHS.DOMAIN}/`} component={Home}/>
            <Route path="/blog" component={Insights}/>
            <Route path="/services" component={Services}/>
            <Route path="/contact" component={Contact}/>
          </MainBody>
          <Footer />
        </div>
      </Router>
    );
  }
};
