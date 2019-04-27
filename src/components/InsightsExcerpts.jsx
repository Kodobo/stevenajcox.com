import React, { Component } from "react";
import { getWpPostContent } from '../apis/wpApi'
import LoaderSpinner from '../components/LoaderSpinner'
import { StyledInsightsExcerptHeader, StyledInsightsExcerptContainer } from './styles/BloggerPosts';
import InsightsExcerpt from './InsightsExcerpt';
import moment from "moment/moment";
import ReactHtmlParser from "react-html-parser";

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
          <StyledInsightsExcerptHeader>
            <h3>
              {ReactHtmlParser(post.title)}
            </h3>
            <h6>
              {ReactHtmlParser(moment(post.date).format("dddd Do MMMM YYYY"))}
            </h6>
          </StyledInsightsExcerptHeader>
          <InsightsExcerpt>
            <img src={post.featured_image} style={{maxWidth: '20%'}} />
            {ReactHtmlParser(post.excerpt)}
          </InsightsExcerpt>
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
