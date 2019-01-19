import React, {Component} from 'react';
import { StyledNavbar, NavbarLinks, NavbarLinksList, NavbarLink } from './styles/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DOMAIN = "/stevenajcox.com";

export default class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <NavbarLinks>
          <NavbarLinksList>
            <NavbarLink exact to={`${DOMAIN}/`}>
              <FontAwesomeIcon icon={['fa', 'home']} size="2x" />
              <br/>
              Home
            </NavbarLink>
            <NavbarLink exact to="/blog">
              <FontAwesomeIcon icon={['fa', 'lightbulb']} size="2x" />
              <br/>Insights
            </NavbarLink>
            <NavbarLink exact to="/services">
              <FontAwesomeIcon icon={['fa', 'handshake']} size="2x" />
              <br/>
              Services
            </NavbarLink>
            <NavbarLink exact to="/contact">
              <FontAwesomeIcon icon={['fa', 'address-card']} size="2x" />
              <br/>Contact
            </NavbarLink>
          </NavbarLinksList>
        </NavbarLinks>
      </StyledNavbar>
    )
  }
}