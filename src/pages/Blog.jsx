import React, { Component } from 'react';
import InsightsExcerpts from '../components/InsightsExcerpts';
import { BodyContent } from './styles/Pages';

export default class Blog extends Component {
  render() {
    return (
      <BodyContent>
        <h1>
            Insights
        </h1>
        <hr/>
        <InsightsExcerpts />
      </BodyContent>
    )
  }
}
