import React, { Component } from 'react';
import { ServicesContent } from '../content/StaticContent';
import { BodyContent } from './styles/Pages';

export default class Services extends Component {
  render() {
    return (
      <BodyContent>
        <h1>
          Services
        </h1>
        {ServicesContent}
      </BodyContent>
    )
  }
}