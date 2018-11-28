import React, {Component} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
export default class Navbar extends Component {

    render() {
        return (
            <div className="navbar">
                <div className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </div>
                <div className="navbar-item">
                    <Link to="/blog" className="navbar-link">Blog</Link>
                </div>
                <div className="navbar-item">
                    <Link to="/services" className="navbar-link">Services</Link>
                </div>
                <div className="navbar-item">
                    <Link to="/contact" className="navbar-link">Contact</Link>
                </div>
            </div>
        )
    }
}