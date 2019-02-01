import React, {Component} from 'react';
import { StyledNavbar, NavbarLinks, NavbarLinksList, NavbarLink } from './styles/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Navbar extends Component {
  render() {
    console.log(process.env.REACT_APP_DOMAIN);
    return (
      <StyledNavbar>
        <NavbarLinks>
          <NavbarLinksList>
            <NavbarLink exact to={`${process.env.REACT_APP_DOMAIN}/`}>
              <FontAwesomeIcon icon={['fa', 'home']} size="2x" />
              <br/>
              Home
            </NavbarLink>
            <NavbarLink exact to={`${process.env.REACT_APP_DOMAIN}/blog`}>
              <FontAwesomeIcon icon={['fa', 'lightbulb']} size="2x" />
              <br/>Insights
            </NavbarLink>
            <NavbarLink exact to={`${process.env.REACT_APP_DOMAIN}/services`}>
              <FontAwesomeIcon icon={['fa', 'handshake']} size="2x" />
              <br/>
              Services
            </NavbarLink>
            <NavbarLink exact to={`${process.env.REACT_APP_DOMAIN}/contact`}>
              <FontAwesomeIcon icon={['fa', 'address-card']} size="2x" />
              <br/>Contact
            </NavbarLink>
          </NavbarLinksList>
        </NavbarLinks>
      </StyledNavbar>
    )
  }
}