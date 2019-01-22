import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLOURS } from '../../globalConstants/colours';
import BREAKPOINTS from '../../globalConstants/breakpoints'

export const StyledNavbar = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${COLOURS.GUNMETAL_GREY};
  font-size: 16px;
  align-self: center;
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    min-width: calc(100% - 100px);
  }
`;

export const NavbarLinks = styled.div`
  height: 100%;
  min-width: 75px;
  flex-grow: 1;
`;

export const NavbarLinksList = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const NavbarLink = styled(NavLink).attrs(props => ({to: props.to}))`
  :not(.MsoHyperlink) {
    padding: 32px 15px;
    text-decoration: none;
    flex-grow: 1;
    text-align: center;
    color: white;
    
    &.active {
      font-weight: bold;
      color: ${COLOURS.PINK_RED};
      background-color: ${COLOURS.LIGHT_GREY};
      box-shadow: 0 0 0 1px ${COLOURS.LIGHT_GREY};
    }
    
    @media (max-width: ${BREAKPOINTS.TABLET}) {
      padding: 5px;
    }
  }
`;
