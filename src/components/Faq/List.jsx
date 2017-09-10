import React from 'react';
import {
  Link,
} from 'react-router-dom';

const FaqList = props => (
  <div>
    <Link to={`/faq/${props.id}`} >
      <h2>{props.title}</h2>
    </Link>
  </div>
);

export default FaqList;
