import React from "react";

export const generateParagraphs = content => {
  return content.map(sentence => <p>{sentence}</p>);
};