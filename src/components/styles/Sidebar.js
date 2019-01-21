import styled from 'styled-components';
import { COLOURS } from "../../globalConstants/colours";
import { DIMENSIONS } from "../../globalConstants/dimensions";

export const StyledLeftSidebar = styled.div`
  background-color: ${COLOURS.PINK_RED};
`;

export const StyledSidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px;
`;

export const StyledSidebar = styled.div`
  width: ${DIMENSIONS.SIDEBAR_WIDTH};
  text-align: left;
  margin: 0 10px;
`;

export const SidebarImage = styled.img`
  width: ${DIMENSIONS.SIDEBAR_WIDTH};
`;