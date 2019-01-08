import React, {Component} from 'react';
import {generateParagraphs} from "../helpers";
import * as Content from "../content/StaticContent";

export default class Home extends Component {
  render() {

    return (
      <div className="body-content">
        <h1>About Me</h1>
        {generateParagraphs(Content.Welcome)}
      </div>
    )

  }
}