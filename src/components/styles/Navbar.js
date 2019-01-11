import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLOURS } from '../../globalStyles/colours';

export const StyledNavbar = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${COLOURS.GUNMETALGREY};
  font-size: 16px;
  align-self: center;
`;

export const NavbarLinks = styled.div`
  height: 100%;
  min-width: 75px;
  flex-grow: 1;
`;

export const NavbarLinksList = styled.ul`
  height: 100%;
  margin: 0;
  display: flex;
`;

export const NavbarLink = styled(NavLink).attrs({to: props => props.to})`
  :not(.MsoHyperlink) {
    padding: 25px;
    text-decoration: none;
    flex-grow: 1;
    text-align: center;
    color: white;
      
    &.active {
      font-weight: bold;
      color: ${COLOURS.PINKRED};
      background-color: ${COLOURS.LIGHTGREY};
    }
  }
`;
