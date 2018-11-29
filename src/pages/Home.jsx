import React, {Component} from 'react';
import {generateParagraphs} from "../helpers";
import {placeholder1, placeholder2} from "../content/StaticContent";
import model from '../assets/di_model.png';
import { getPosts } from '../apis/bloggerApi'

export default class Home extends Component {
  componentDidMount() {
    getPosts()
  }

  render() {

    return (
      <div className="body-content">

        {/*{generateParagraphs(placeholder1)}*/}
        {/*<img id="di_model" src={model} />*/}
        {/*{generateParagraphs(placeholder2)}*/}
      </div>
    )

  }
}