import React from 'react';
import ChatBot from '../../../../bot/ChatBot';

const steps = [
  {
    id: '1',
    message: 'You are trying to login with which service?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      {
        value: 'Username/Pass',
        label: 'Username/Password',
        trigger: (value) => {
          console.log(value);
          return '4';
        },
      },
      { value: 2, label: 'Clever Login', trigger: '3' },
      { value: 3, label: 'Google Login', trigger: '3' },
    ],
  },
  {
    id: '3',
    message: 'Wrong answer, try again.',
    trigger: '2',
  },
  {
    id: '4',
    message: 'Awesome! You are a telepath!',
    end: true,
  },
];

const List = () => (
  <ChatBot
    steps={steps}
  />
);

export default List;
