import styled from 'styled-components';
import { COLOURS } from "../../globalConstants/colours";
import { DIMENSIONS } from "../../globalConstants/dimensions";
import BREAKPOINTS from "../../globalConstants/breakpoints";

export const StyledLeftSidebar = styled.div`
  background-color: ${COLOURS.PINK_RED};
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    display: none;
  }
`;

export const StyledSidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px;
    
    @media (min-width: ${BREAKPOINTS.TABLET}) and (max-width: ${BREAKPOINTS.DESKTOP}) {
      margin: 0 30px;
    }
`;

export const StyledSidebar = styled.div`
  width: ${DIMENSIONS.SIDEBAR_WIDTH};
  text-align: left;
  margin: 0 10px;
  
  @media (min-width: ${BREAKPOINTS.TABLET}) and (max-width: ${BREAKPOINTS.DESKTOP}) {
    width: calc(${DIMENSIONS.SIDEBAR_WIDTH} * 0.75);
  }
`;

export const SidebarImage = styled.img`
  width: ${DIMENSIONS.SIDEBAR_WIDTH};
  
  @media (min-width: ${BREAKPOINTS.TABLET}) and (max-width: ${BREAKPOINTS.DESKTOP}) {
    width: calc(${DIMENSIONS.SIDEBAR_WIDTH} * 0.75);
  }
`;

export const TwitterTimeline = styled.a`
  width: ${DIMENSIONS.SIDEBAR_WIDTH};
  
  @media (min-width: ${BREAKPOINTS.TABLET}) and (max-width: ${BREAKPOINTS.DESKTOP}) {
    width: calc(${DIMENSIONS.SIDEBAR_WIDTH} * 0.75);
  }
`;