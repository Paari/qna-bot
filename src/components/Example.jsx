import React from 'react';
import ChatBot from '../../bot/index';

const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: '1',
  },
];

const ThemedExample = () => (
  <ChatBot
    steps={steps}
  />
);

export default ThemedExample;
