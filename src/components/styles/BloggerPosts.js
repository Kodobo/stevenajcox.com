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
// The descendant selectors need to use !important to override the
// styles hardcoded into the Blogger post tags.
export const BlogPostContainer = styled.div`
  margin: 20px 0;
   
  & .MsoTableGrid {
    width: 100% !important;
  }
  
  & * {
    background-color: ${COLOURS.LIGHT_GREY} !important;
  }
`;

export const BlogPostHeader = styled.div`
  ${commonStyles};
`;

export const StyledPostContent = styled.div`
  ${commonStyles};
  max-height: ${props => props.showAll ? `100%` : `200px`};
  overflow: hidden;
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
