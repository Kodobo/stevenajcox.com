import React, { Component } from 'react';
import { StyledInsightsExcerptContainer, StyledExcerptContent, ReadMoreButton, ExcerptFeatureImage } from './styles/InsightsPosts';
import moment from "moment/moment";
import ReactHtmlParser from "react-html-parser";

export default class InsightsExcerpt extends Component {
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
    const { showAll } = this.state;
    const buttonText = showAll ? 'Read less...' : 'Read more...';
    return (
      <StyledInsightsExcerptContainer>
        <StyledExcerptContent showAll={showAll}>
          <h3>{post.title}</h3>
          <h4>{ReactHtmlParser(moment(post.date).format("dddd Do MMMM YYYY"))}</h4>
          <ExcerptFeatureImage src={post.featured_image} />
          {ReactHtmlParser(post.excerpt)}
        </StyledExcerptContent>
        <ReadMoreButton onClick={this.handleReadMore}>{buttonText}</ReadMoreButton>
      </StyledInsightsExcerptContainer>
    )
  }
}