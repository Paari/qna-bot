import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ChatBot from '../../bot/index';
import Faq from './faq';

import steps from './Data/';

const ThemedExample = () => (
  <Router>
    <main className="main-wrapper">
      <ChatBot
        steps={steps}
      />
      <section className="main-list">
        <Faq />
      </section>
    </main>
  </Router>
);

export default ThemedExample;
