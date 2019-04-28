import styled, { css } from 'styled-components';
import { COLOURS } from "../../globalConstants/colours";

const textOverflow = css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const StyledInsightsTiles = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  max-width: 100%;
`;

export const StyledInsightsTile = styled.div`
  background-color: white;
  box-shadow: 3px 5px 3px 1px ${COLOURS.SHADOW_GREY};
  margin: 10px;
  max-width: 300px
  width: 100%;
  
  & * {
    background-color: white;
    overflow: hidden;
  }
`;

export const InsightsTileFeatureImage = styled.img`
  display: block;
  margin: 0 auto;
  height: 114px;
  width: 300px;
  object-fit: cover;
`;

export const StyledInsightsTitle = styled.h3`
  ${textOverflow};
  overflow: hidden;
  height: 55px;
  margin: 10px 10px 0;
`;

export const StyledInsightsExcerpt = styled.div`
  ${textOverflow};
    
  & p {
      overflow: hidden;
      margin: 0 10px 10px;
      font-size: 14px
  }
`;