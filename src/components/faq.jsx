import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import FaqContent from './Faq/Content';
import faqData from './Faq/faq.data';
import List from './Faq/List';

class Faq extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: faqData,
    };
  }

  renderRoutes() {
    return this.state.pages.map(item => (
      <div key={item.id}>
        <Route
          path={`/faq/${item.id}`}
          render={() => (
            <div>
              <Link to="/" className="go__back">Back to list</Link>
              <FaqContent title={item.title} content={item.content} />
            </div>
          )}
        />
      </div>
    ));
  }

  renderList() {
    return this.state.pages.map(item => (
      <div key={item.id}>
        <List title={item.title} id={item.id} />
      </div>
    ));
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            exact
            render={() => (<div>{this.renderList()}</div>)}
          />
          {this.renderRoutes()}
        </div>
      </Router>
    );
  }
}

export default Faq;
