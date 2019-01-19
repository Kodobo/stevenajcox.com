import styled from 'styled-components';
import { COLOURS } from "../../styleConstants/colours";

// The descendant selectors need to use !important to override the
// styles hardcoded into the Blogger post tags.
export const BlogPostContainer = styled.div`
  margin: 20px 0;
  
  & * {
    background-color: ${COLOURS.LIGHT_GREY} !important;
  }
  
  & .MsoTableGrid {
    width: 100% !important;
  }
`;

export const BlogPostContent = styled.div`
  max-height: ${props => props.showAll ? `100%` : `200px`};
  overflow: hidden;
`;