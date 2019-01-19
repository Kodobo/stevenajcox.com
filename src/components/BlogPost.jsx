import React, { Component } from 'react';
import { BlogPostContent } from './styles/BloggerPosts';

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    }
  }

  handleReadMore = () => {
    const { showAll } = this.state;
    this.setState({showAll: !showAll })
  };

  render() {
    const { showAll } = this.state;
    const buttonText = showAll ? 'Read less...' : 'Read more...';
    return (
      <>
        <BlogPostContent showAll={showAll}>
          {this.props.children}
        </BlogPostContent>
        <button onClick={this.handleReadMore}>{buttonText}</button>
      </>
    )
  }
}