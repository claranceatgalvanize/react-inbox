import React, { Component } from 'react'
import '../css/App.css';
import Messages from './messages/Messages'
import Toolbar from './toolbar/Toolbar'

class App extends Component {

  state = { messages: [] }

  getAllMesseges = async () => {
    try {
      const res = await fetch('http://localhost:8082/api/messages');
      const messages = await res.json();
      this.setState({ messages })
    }
    catch(error){console.log( error )}
  }
  
  async componentDidMount(){this.getAllMesseges()}
  
  selectStatus = () => {
    let { messages } = this.state;
    let disabledSatus = '';
    const selectedCount = messages.filter( message => message.selected ).length;
    switch( selectedCount ) {
      case selectedCount === 0 : disabledSatus = "square"; break;
      case selectedCount === messages.length : disabledSatus = "check-square"; break;
      default: disabledSatus = "minus-square"; break;
    }
    return disabledSatus;
  }

  messageSelected = id => {
    let { messages } = this.state;
    const updateMessages = messages.map( message => 
      ( message.id === id ? { ...message, selected: !message.selected } : message )
    )
    this.setState({ messages: updateMessages })
  }

  toggleAll = () => {
    let { messages } = this.state;
    const checked = messages.filter( message => !message.selected );
    const selected = ( checked.length <= 0 ) ? false : true;
    const updateMessages = messages.map( message => ({ ...message, selected }) )
    this.setState({ messages: updateMessages })
  }

  markRead = () => {
    
  }

  applyLabel = () => {

  }

  removeLabel = () => {

  }

  deleteMessage = () => {

  }

  render () {
    return (
      <div>
        < Toolbar 
          messages={ this.state.messages } // [√]
          deleteMessage={ this.deleteMessage } 
          selectStatus={ this.selectStatus } // [√]
          removeLabel={ this.removeLabel } 
          applyLabel={ this.applyLabel } 
          toggleAll={ this.toggleAll } // [√]
          markRead={ this.markRead } 
        />
        < Messages 
          messages={ this.state.messages } // [√]
          messageSelected={ this.messageSelected } // [√]
        />
      </div>
    )
  }
}

export default App