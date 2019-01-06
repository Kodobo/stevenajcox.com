import React, { Component } from 'react';
import { getPosts } from '../apis/bloggerApi';
import ReactHtmlParser from 'react-html-parser';

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      bloggerPosts: []
    }
  }
  componentDidMount() {
    Promise.resolve(getPosts()).then(res => {
      this.setState({bloggerPosts: res})
    });
  }

  renderPosts = () => {
    const { bloggerPosts } = this.state;
    return bloggerPosts.map(post => {
      return ReactHtmlParser(post);
    })
  };

  render() {
    return (
      <div className="body-content">
        <h1>
            Blog
        </h1>
        {this.renderPosts()}
      </div>
    )
  }
}
