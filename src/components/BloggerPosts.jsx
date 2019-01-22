import React, { Component } from "react";
import {getPosts} from "../apis/bloggerApi";
import LoaderSpinner from '../components/LoaderSpinner'
import { BlogPostHeader, BlogPostContainer } from './styles/BloggerPosts';
import BlogPostContent from './BlogPostContent';
import moment from "moment/moment";
import ReactHtmlParser from "react-html-parser";

export default class BloggerPosts extends Component {
  constructor(props) {
    super(props);
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
        this.setState({loading: false})
      })
  }

  renderBlogPosts = () => {
    const { bloggerPosts } = this.state;
    return bloggerPosts.map((post, index) => {
      return (
        <BlogPostContainer key={index}>
          <BlogPostHeader>
            <h3>
              {ReactHtmlParser(post.title)}
            </h3>
            <h6>
              {ReactHtmlParser(moment(post.published).format("dddd Do MMMM YYYY"))}
            </h6>
          </BlogPostHeader>
          <BlogPostContent>
            {ReactHtmlParser(post.content)}
          </BlogPostContent>
          <hr />
        </BlogPostContainer>
      );
    })
  };

  render() {
    const { loading } = this.state;

    return loading ? <LoaderSpinner /> : this.renderBlogPosts();
  };
}
