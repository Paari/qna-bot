import React from 'react';
import ChatBot from '../../bot/index';

import steps from './Data/';

const ThemedExample = () => (
  <ChatBot
    steps={steps}
  />
);

export default ThemedExample;
