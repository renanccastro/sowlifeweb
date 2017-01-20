import React, {Component} from 'react';
import ChatInput from './ChatInput'
import ChatHistory from './ChatHistory'

export default class Chat extends Component {
  render() {
    return (
      <div>
        <ChatHistory />
        <ChatInput />
      </div>
    );
  }
}
