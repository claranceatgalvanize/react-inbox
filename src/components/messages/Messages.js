import React from 'react'
import Message from './Message'

const Messages = ({ messages, messageSelected, toggleStar, selectStatus  }) => {
  const message = messages.map(( message, idx ) => 
    <Message 
      key={ idx }
      message={ message }
      toggleStar={ toggleStar }
      selectStatus={ selectStatus }
      messageSelected={ messageSelected }
    />
  )
  return (
    <div>{ message }</div>
  )
}

export default Messages
