import styled from 'styled-components';
import { Link } from "react-router-dom";
import { COLOURS } from '../../globalConstants/colours';
import { DIMENSIONS } from '../../globalConstants/dimensions';
import BREAKPOINTS from '../../globalConstants/breakpoints'

export const StyledHeaderBar = styled.div`
  display: flex;
  
  text-align: left;
  border: solid 1px ${COLOURS.GUNMETAL_GREY};
  background-color: ${COLOURS.GUNMETAL_GREY};
  color: white;
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    flex-direction: column;
    min-width: 0;
  }
`;

export const HeaderBarRouterLink = styled(Link).attrs(props => ({to: props.to}))`
  :not(.MsoFollowed) {
    width: ${DIMENSIONS.SIDEBAR_WIDTH};
    min-width: ${DIMENSIONS.SIDEBAR_WIDTH};
    padding: 0 50px;
    text-decoration: none;
    color: inherit;
    
    @media (min-width: ${BREAKPOINTS.TABLET}) and (max-width: ${BREAKPOINTS.DESKTOP}) {
      width: calc((${DIMENSIONS.SIDEBAR_WIDTH} * 0.75) + 20px);
      min-width: calc((${DIMENSIONS.SIDEBAR_WIDTH} * 0.75) + 20px);
      padding: 0 30px;
    }
  
    @media (max-width: ${BREAKPOINTS.TABLET}) {
      width: calc(100% - 20px);
      min-width: calc(100% - 20px);
      padding: 0 10px;
    }
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0;   
`;