import React, { Component } from 'react';
import BloggerPosts from '../components/BloggerPosts';
import { BodyContent } from './styles/Pages';

export default class Blog extends Component {
  render() {
    return (
      <BodyContent>
        <h1>
            Blog
        </h1>
        <hr/>
        <BloggerPosts />
      </BodyContent>
    )
  }
}
