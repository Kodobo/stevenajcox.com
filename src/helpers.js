import React from "react";

export const generateParagraphs = content => {
  return content.map((sentence, index) => <p key={index}>{sentence}</p>);
};