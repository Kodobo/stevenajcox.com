import React, { Component } from "react";
import {getPosts} from "../apis/bloggerApi";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import LoaderSpinner from '../components/LoaderSpinner'
import { BlogPostContainer } from './styles/BloggerPosts';

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
    return bloggerPosts.map(post => {
      return (
        <div>
          <BlogPostContainer>
            <h3>
              {ReactHtmlParser(post.title)}
            </h3>
            <h6>
              {ReactHtmlParser(moment(post.published).format("dddd Do MMMM YYYY"))}
            </h6>
            {ReactHtmlParser(post.content)}
          </BlogPostContainer>
          <hr/>
        </div>
      );
    });
  };

  render() {
    const { loading } = this.state;

    return loading ? <LoaderSpinner /> : this.renderBlogPosts();
  };
}
