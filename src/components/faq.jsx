import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import FaqContent from './Faq/Content';
import faqData from './Faq/faq.data';

class Faq extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: faqData,
    };
  }

  renderList() {
    return this.state.pages.map(item => (
      <div key={item.id}>
        <Router>
          <Route
            exact
            path="/"
            render={() => (<FaqContent title={item.title} content={item.content} />)}
          />
        </Router>
      </div>
    ));
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default Faq;
