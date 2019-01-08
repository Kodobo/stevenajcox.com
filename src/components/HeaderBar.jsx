import React, { Component } from "react";
import NavBar from './Navbar';
import './HeaderBar.css';
import Home from "../pages/Home";
import {Link, Route} from "react-router-dom";

export default class HeaderBar extends Component {
  render() {
    return (
      <div className="header-bar">
        <Link to="/" className="header-bar-text">
          <h1 className="header-title">Steven AJ Cox</h1>
          <p className="header-subtitle">Sharing best practice, ideas and opinions from around the world</p>
        </Link>
        <NavBar />
      </div>
    )
  }
}