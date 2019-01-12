import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { LoadingContainer } from "./styles/LoaderSpinner";

export default class LoaderSpinner extends Component {
  render() {
    return (
      <LoadingContainer>
        <Loader type="CradleLoader"
                height="100"
                width="100" />
      </LoadingContainer>
    );
  };
}