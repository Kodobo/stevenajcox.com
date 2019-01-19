import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLOURS } from '../../styleConstants/colours';

export const StyledNavbar = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${COLOURS.GUNMETAL_GREY};
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
  padding: 0;
  display: flex;
`;

export const NavbarLink = styled(NavLink).attrs(props => ({to: props.to}))`
  :not(.MsoHyperlink) {
    padding: 25px;
    text-decoration: none;
    flex-grow: 1;
    text-align: center;
    color: white;
      
    &.active {
      font-weight: bold;
      color: ${COLOURS.PINK_RED};
      background-color: ${COLOURS.LIGHT_GREY};
    }
  }
`;
