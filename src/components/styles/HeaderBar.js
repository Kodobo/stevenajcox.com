import styled from 'styled-components';
import { Link } from "react-router-dom";
import { COLOURS } from '../../globalConstants/colours';

export const StyledHeaderBar = styled.div`
  display: flex;
  text-align: left;
  border: solid 1px ${COLOURS.GUNMETAL_GREY};
  background-color: ${COLOURS.GUNMETAL_GREY};
  color: white;
`;

export const HeaderBarRouterLink = styled(Link).attrs(props => ({to: props.to}))`
  :not(.MsoFollowed) {
    width: 290px;
    min-width: 290px;
    padding: 0 50px;
    text-decoration: none;
    color: inherit;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0;   
`;