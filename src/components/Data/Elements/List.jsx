import React from 'react';
import { Redirect } from 'react-router-dom';
import ChatBot from '../../../../bot/ChatBot';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      path: '',
      trigger: false,
    };
  }

  componentWillReceiveProps() {
    this.setState({
      redirect: false,
    });
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
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
            value: 'userpass',
            label: 'Username/Password',
            trigger: () => {
              this.setState({
                redirect: true,
                path: '/faq/3',
              });
              return '4';
            },
          },
          {
            value: 'clever',
            label: 'Clever Login',
            trigger: () => {
              this.setState({
                redirect: true,
                path: '/faq/1',
              });
              return '4';
            },
          },
          {
            value: 'google',
            label: 'Google Login',
            trigger: () => {
              this.setState({
                redirect: true,
                path: '/faq/2',
              });
              return '4';
            },
          },
        ],
      },
      {
        id: '3',
        message: 'Wrong answer, try again.',
        trigger: '2',
      },
      {
        id: '4',
        message: 'You can read through the details of the problem on the right, hope it helps you understand the problem.',
        trigger: '5',
      },
      {
        id: '5',
        message: 'Or you can look for another login method?',
        trigger: '6',
      },
      {
        id: '6',
        options: [
          { value: 1, label: 'Yes', trigger: '2' },
          { value: 2, label: 'No', trigger: () => this.triggetNext() },
        ],
      },
    ];
    const { redirect, trigger } = this.state;

    return (
      <div className="result__wrapper">
        {redirect && <Redirect to={this.state.path} />}
        <ChatBot
          steps={steps}
        />
      </div>
    );
  }
}

export default List;
