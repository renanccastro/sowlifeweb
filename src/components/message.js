import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    if (this.props.message){
      let className = `alert alert-${this.props.message.type}`
      return (
        <div className={className} style={{"textAlign":"center", "marginTop":"10px"}}>
          {this.props.message.message}
        </div>
      )
    }
    else{
      return <div></div>
    }
  }
}
