import React, { Component } from 'react';
import { getPosts } from '../apis/bloggerApi';
import ReactHtmlParser from 'react-html-parser';
import Loader from 'react-loader-spinner';
import './Blog.css';

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      bloggerPosts: []
    }
  }
  componentDidMount() {
    Promise.resolve(getPosts())
      .then(res => {
        this.setState({bloggerPosts: res})
      })
      .then(() => {
        this.setState({loading: false});
      })
  }

  renderBlogPage = () => {
    const { loading } = this.state;

    return loading ? this.renderLoadingIcon() : this.renderPosts();
  };

  renderLoadingIcon = () => {
    return (
      <div className="LoadingContainer">
        <Loader type="CradleLoader"
                height="100"
                width="100" />
      </div>
    );
  };

  renderPosts = () => {
    const { bloggerPosts } = this.state;
    return bloggerPosts.map(post => {
      return ReactHtmlParser(post);
    });
  };

  render() {
    return (
      <div className="body-content">
        <h1>
            Blog
        </h1>
        {this.renderBlogPage()}
      </div>
    )
  }
}
