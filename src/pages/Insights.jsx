import React, { Component } from 'react';
import InsightsTiles from '../components/InsightsTiles';
import { BodyContent } from './styles/Pages';

export default class Insights extends Component {
  render() {
    return (
      <BodyContent>
        <h1>
            Insights
        </h1>
        <hr/>
        <InsightsTiles />
      </BodyContent>
    )
  }
}
