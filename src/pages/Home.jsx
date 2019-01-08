import React, {Component} from 'react';
import {generateParagraphs} from "../helpers";
import * as Content from "../content/StaticContent";

export default class Home extends Component {
  render() {

    return (
      <div className="body-content">
        {generateParagraphs(Content.Welcome)}
      </div>
    )

  }
}