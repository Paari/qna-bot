import React from 'react';
import {
  Link,
} from 'react-router-dom';

const FaqList = props => (
  <div className="main-list__faqs--item">
    <Link to={`/faq/${props.id}`} >
      <h2 className="main-list__faqs--title">{props.title}</h2>
    </Link>
  </div>
);

export default FaqList;
