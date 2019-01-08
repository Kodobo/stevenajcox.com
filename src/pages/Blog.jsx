import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import BloggerPosts from '../components/BloggerPosts';
import './Blog.css';

export default class Blog extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="body-content">
        <h1>
            Blog
        </h1>
        <hr/>
        <BloggerPosts />
      </div>
    )
  }
}
