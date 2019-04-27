import React, { Component } from 'react';
import { StyledInsightsExcerptContainer, StyledExcerptContent, ReadMoreButton } from './styles/BloggerPosts';

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
    const { showAll } = this.state;
    const buttonText = showAll ? 'Read less...' : 'Read more...';
    return (
      <StyledInsightsExcerptContainer>
        <StyledExcerptContent showAll={showAll}>
          {this.props.children}
        </StyledExcerptContent>
        <ReadMoreButton onClick={this.handleReadMore}>{buttonText}</ReadMoreButton>
      </StyledInsightsExcerptContainer>
    )
  }
}