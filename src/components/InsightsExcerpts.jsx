import React, { Component } from "react";
import { getWpPostContent } from '../apis/wpApi'
import LoaderSpinner from '../components/LoaderSpinner'
import { StyledInsightsExcerptContainer } from './styles/InsightsPosts';
import InsightsExcerpt from './InsightsExcerpt';

export default class InsightsExcerpts extends Component {
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
        <StyledInsightsExcerptContainer key={index}>
          <InsightsExcerpt post={post} />
          <hr />
        </StyledInsightsExcerptContainer>
      );
    })
  };

  render() {
    const { loading } = this.state;

    return loading ? <LoaderSpinner /> : this.renderInsightsExcerpts();
  };
}
