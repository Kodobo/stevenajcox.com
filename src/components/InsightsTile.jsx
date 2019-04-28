import React, { Component } from 'react';
import {
  StyledInsightsTile,
  // InsightsTileContent,
  // ReadMoreButton,
  InsightsTileFeatureImage,
  StyledInsightsTitle,
  StyledInsightsExcerpt
} from './styles/InsightsPosts';
// import moment from "moment/moment";
import ReactHtmlParser from "react-html-parser";

export default class InsightsTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    }
  }

  handleReadMore = () => {
    const { showAll } = this.state;
    this.setState({showAll: !showAll})
  };

  render() {
    const post = this.props.post;
    return (
      <StyledInsightsTile>
          <InsightsTileFeatureImage src={post.featured_image} />
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