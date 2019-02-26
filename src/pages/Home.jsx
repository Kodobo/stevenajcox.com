import React, { Component } from 'react';
import { WelcomeContent } from '../content/StaticContent';
import { BodyContent } from './styles/Pages';

export default class Home extends Component {
  render() {

    return (
      <BodyContent>
        <h1>About Me</h1>
        {WelcomeContent}
      </BodyContent>
    )

  }
}