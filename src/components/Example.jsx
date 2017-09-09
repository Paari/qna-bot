import React from 'react';
import ChatBot from '../../bot/index';

const steps = [
  {
    id: '1',
    message: 'Hello World',
    end: true,
  },
];

const ThemedExample = () => (
  <ChatBot steps={steps} />
);

export default ThemedExample;
