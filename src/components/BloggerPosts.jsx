import React, { Component } from "react";
import {getPosts} from "../apis/bloggerApi";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import Loader from "react-loader-spinner";

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

  renderLoadingIcon = () => {
    return (
      <div className="LoadingContainer">
        <Loader type="CradleLoader"
                height="100"
                width="100" />
      </div>
    );
  };

  renderBlogPosts = () => {
    const { bloggerPosts } = this.state;
    return bloggerPosts.map(post => {
      return (
        <div>
          <div className="BlogPostContainer">
            <h3>
              {ReactHtmlParser(post.title)}
            </h3>
            <h6>
              {ReactHtmlParser(moment(post.published).format("dddd Do MMMM YYYY"))}
            </h6>
            {ReactHtmlParser(post.content)}
          </div>
          <hr/>
        </div>
      );
    });
  };

  render() {
    const { loading } = this.state;

    return loading ? this.renderLoadingIcon() : this.renderBlogPosts();
  };
}
