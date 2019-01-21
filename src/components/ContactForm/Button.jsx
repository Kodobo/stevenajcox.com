import React from "react";

const Button = props => {
  return (
    <button
      className="button"
      onClick={props.action}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

export default Button;