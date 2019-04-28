import React, { Component } from 'react';
import {
  StyledInsightsTile,
  InsightsTileFeatureImage,
  StyledInsightsTitle,
  StyledInsightsExcerpt
} from './styles/InsightsPosts';
import ReactHtmlParser from "react-html-parser";
import default_img from "../assets/gay-pride-gradient.jpg";

export default class InsightsTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    }
  }

  getFeaturedImage = (image) => {
    if(image === "") {
      return default_img;
    }
    return image;
  };

  render() {
    const post = this.props.post;
    return (
      <StyledInsightsTile>
          <InsightsTileFeatureImage src={this.getFeaturedImage(post.featured_image)} />
          <StyledInsightsTitle>
            {ReactHtmlParser(post.title)}
          </StyledInsightsTitle>
          <StyledInsightsExcerpt>
            {ReactHtmlParser(post.excerpt)}
          </StyledInsightsExcerpt>
      </StyledInsightsTile>
    )
  }
}
