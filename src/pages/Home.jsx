import React, {Component} from 'react';
import {generateParagraphs} from "../helpers";
import * as Content from "../content/StaticContent";
import { BodyContent } from './styles/Pages';

export default class Home extends Component {
  render() {

    return (
      <BodyContent>
        <h1>About Me</h1>
        {generateParagraphs(Content.Welcome)}
      </BodyContent>
    )

  }
}