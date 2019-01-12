import React, { Component } from 'react';
import { StyledFooter, FooterSection, FooterLink, FooterRouterLink, Fineprint } from './styles/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <FooterSection>
          <FooterRouterLink to='/'>Home</FooterRouterLink>
          <FooterRouterLink to="/blog">Blog</FooterRouterLink>
          <FooterRouterLink to="/services">Services</FooterRouterLink>
          <FooterRouterLink to="/contact">Contact</FooterRouterLink>
        </FooterSection>
        <FooterSection>
          <FooterLink
             href="https://www.linkedin.com/in/stevenajcox"
             target="_blank"
             rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </FooterLink>
          <FooterLink
             href="https://twitter.com/StevenAJC"
             target="_blank"
             rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
          </FooterLink>
          <FooterLink
             href="https://www.instagram.com/stevenajcox/"
             target="_blank"
             rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </FooterLink>
        </FooterSection>
        <FooterSection>
          <Fineprint>&copy; 2018 Steven Cox</Fineprint>
        </FooterSection>
        <FooterSection>
          <Fineprint>Website created by Kodobo</Fineprint>
        </FooterSection>
      </StyledFooter>
    )
  }
}