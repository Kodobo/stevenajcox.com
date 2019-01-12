import styled from 'styled-components';
import { Link } from "react-router-dom";
import { COLOURS } from '../../globalStyles/colours';

export const StyledHeaderBar = styled.div`
  display: flex;
  text-align: left;
  border: solid 1px ${COLOURS.GUNMETAL_GREY};
  padding-left: 50px;
  background-color: ${COLOURS.GUNMETAL_GREY};
  color: white;
`;

export const HeaderBarRouterLink = styled(Link).attrs({to: props => props.to})`
  :not(.MsoFollowed) {
    width: 350px;
    min-width: 300px;
    text-decoration: none;
    color: inherit;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0;   
`;