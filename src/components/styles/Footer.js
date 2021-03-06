import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";
import { COLOURS } from '../../globalConstants/colours';
import BREAKPOINTS from '../../globalConstants/breakpoints'

const FooterLinkStyle = css`
  :not(.MsoHyperlink) {
    color: lightskyblue;
    text-decoration: none;
    margin: 0 20px;
  }
`;

export const StyledFooter = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  
  max-width: 100%;
  background-color: ${COLOURS.GUNMETAL_GREY};
  padding: 10px;
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    max-width: ${BREAKPOINTS.MOBILE};
    min-width: 0;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 32px;
  max-height: 50px;
  margin: 5px 0;
  color: lightskyblue;
`;

export const FooterLink = styled.a`
  ${FooterLinkStyle};
`;

export const FooterRouterLink = styled(Link).attrs(props => ({to: props.to}))`
  ${FooterLinkStyle};
`;

export const Fineprint = styled.p`
  margin: 5px 0;
  padding: 0;
  font-size: 12px;
  color: white;
`;