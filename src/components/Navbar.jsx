import React, {Component} from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Navbar extends Component {


    render() {
        return (
            <>
                <div className="navbar">
                <div className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </div>
                <div className="navbar-item">
                    <Link to="/blog" className="navbar-link">Blog</Link>
                </div>
                <div className="navbar-item">
                    <a href="about:blank" className="navbar-link">Services</a>
                </div>
                <div className="navbar-item">
                    <a href="about:blank" className="navbar-link">Contact</a>
                </div>
            </div>
            </>
        )
    }
}