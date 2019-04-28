import styled, { css } from 'styled-components';
import { COLOURS } from "../../globalConstants/colours";

const commonStyles = css`
  padding: 10px;
  background-color: white !important;
  box-shadow: 3px 5px 3px 1px ${COLOURS.SHADOW_GREY};
  
  & * {
    background-color: white !important;
  }
`;

export const StyledInsightsExcerptContainer = styled.div`
  max-width: 100%;
`;

export const StyledExcerptContent = styled.div`
  ${commonStyles};
  overflow: hidden;
  word-break: break-word;
`;

export const ReadMoreButton = styled.button`
  margin: 20px 0;
  padding: 5px;
  color: white;
  background-color: ${COLOURS.PINK_RED} !important;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 1px ${COLOURS.SHADOW_PINK};
  outline: none;
  cursor: pointer;
`;

export const ExcerptFeatureImage = styled.img`
  display: block;
  margin: 0 auto;
  max-height: 200px; 
  max-width: inherit;
`;