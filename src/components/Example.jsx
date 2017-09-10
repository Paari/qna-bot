import React from 'react';
import ChatBot from '../../bot/index';
import Faq from './faq';

import steps from './Data/';

const ThemedExample = () => (
  <main className="main-wrapper">
    <ChatBot
      steps={steps}
    />
    <section>
      <Faq />
    </section>
  </main>
);

export default ThemedExample;
