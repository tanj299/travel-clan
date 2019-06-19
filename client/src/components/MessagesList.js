import React, { Component } from 'react'
import Message from './Message'
import NewMessageEntry from './NewMessageEntry'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

 class MessagesList extends Component {


     render() {
    const channelId = Number(this.props.match.params.channelId) // because it's a string "1", not a number!
    const messages = this.props.messages
    console.log(messages)
    const filteredMessages = messages.filter(
        message => message.channelId === channelId
    )

    return (
        <div>
            <ul className="media-list">
                {filteredMessages.map(message => (
                    <Message message={message} key={message.id} />
                ))}
            </ul>
            <NewMessageEntry channelId={ channelId }/>
        </div>
    )
                }
}

const mapStateToProps = state => ({
        messages: state.ChatStore.messages,
})

export default withRouter(connect(mapStateToProps, null)(MessagesList))