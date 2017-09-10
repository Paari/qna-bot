import React from 'react';
import renderHTML from 'react-render-html';

const FaqContent = props => (
  <div>
    <h2>{props.title}</h2>
    <div>
      {renderHTML(props.content)}
    </div>
  </div>
);

export default FaqContent;
