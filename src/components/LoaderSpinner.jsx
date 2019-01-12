import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class LoaderSpinner extends Component {
  render() {
    return (
      <div className="LoadingContainer">
        <Loader type="CradleLoader"
                height="100"
                width="100" />
      </div>
    );
  };
}