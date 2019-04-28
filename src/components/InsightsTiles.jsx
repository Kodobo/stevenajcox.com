import React, { Component } from "react";
import { getWpPostContent } from '../apis/wpApi'
import LoaderSpinner from '../components/LoaderSpinner'
import { StyledInsightsTiles } from './styles/InsightsPosts';
import InsightsTile from './InsightsTile';

export default class InsightsTiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: []
    }
  }

  componentDidMount() {
    Promise.resolve(getWpPostContent())
      .then(res => {
        this.setState({posts: res})
      })
      .then(() => {
        this.setState({loading: false})
      })
  }

  renderInsightsExcerpts = () => {
    const { posts } = this.state;
    return posts.map((post, index) => {
      return (
        <InsightsTile key={index} post={post} />
      );
    })
  };

  render() {
    const { loading } = this.state;

    return loading ?
      <LoaderSpinner /> :
      <StyledInsightsTiles>
        {this.renderInsightsExcerpts()}
      </StyledInsightsTiles>
  };
}
