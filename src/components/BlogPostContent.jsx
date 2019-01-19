import React, { Component } from 'react';
import { StyledPostContent, ReadMoreButton } from './styles/BloggerPosts';

export default class BlogPostContent extends Component {
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
      <>
        <StyledPostContent showAll={showAll}>
          {this.props.children}
        </StyledPostContent>
        <ReadMoreButton onClick={this.handleReadMore}>{buttonText}</ReadMoreButton>
      </>
    )
  }
}