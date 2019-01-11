import React, {Component} from 'react';
import { StyledNavbar, NavbarLinks, NavbarLinksList, NavbarLink } from './styles/Navbar';
export default class Navbar extends Component {

    render() {
        return (
            <StyledNavbar>
                <NavbarLinks>
                  <NavbarLinksList>
                    <NavbarLink exact to="/">Home</NavbarLink>
                    <NavbarLink exact to="/blog">Blog</NavbarLink>
                    <NavbarLink exact to="/services">Services</NavbarLink>
                    <NavbarLink exact to="/contact">Contact</NavbarLink>
                  </NavbarLinksList>
                </NavbarLinks>
            </StyledNavbar>
        )
    }
}