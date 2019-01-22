import styled from 'styled-components';
import { COLOURS } from "../../globalConstants/colours";
import BREAKPOINTS from '../../globalConstants/breakpoints'

export const BodyContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  margin: 50px;
  border-radius: 4px; 
  background-color: ${COLOURS.LIGHT_GREY};
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    width: calc(100% - 30px);
    margin: 0;
  }
`;
