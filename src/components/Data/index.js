import React from 'react';
import List from './Elements/List';

const steps = [
  {
    id: '1',
    message: 'How can I help you?',
    trigger: '2',
  },
  {
    id: '2',
    message: 'Please select a project or browser from the list on the right 👉',
    trigger: '3',
  },
  {
    id: '3',
    options: [
      { value: 'Flex Time Manager', label: 'Flex Time Manager', trigger: '4' },
      { value: 'e-hallpass', label: 'e-hallpass', trigger: '4' },
    ],
  },
  {
    id: '4',
    message: 'What is the problem you are facing in {previousValue}',
    trigger: '5',
  },
  {
    id: '5',
    options: [
      { value: 'Login', label: 'Login not working?', trigger: '6' },
      { value: 'Site is down', label: 'Site seems to be down?', trigger: '4' },
    ],
  },
  {
    id: '6',
    component: <List />,
    waitAction: true,
    trigger: '7',
  },
  {
    id: '7',
    message: 'or look for some other problem from the list',
    trigger: '8',
  },
  {
    id: '8',
    options: [
      { value: 1, label: 'Yes', trigger: '5' },
      { value: 2, label: 'No' },
      { value: 3, label: 'Change the project', trigger: '3' },
    ],
  },
];

export default steps;
