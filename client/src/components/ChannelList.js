import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1'
const CHAT_CHANNEL = '/channels/2'
const PLAN_CHANNEL = '/channels/3'
const LUNCH_CHANNEL = '/channels/4'

export class ChannelList extends Component {
    render() {
        const filterMessageChannel = id =>
            this.props.messages.filter(m => m.channelId === id)
        const randomMessages = filterMessageChannel(1)
        const chatMessages = filterMessageChannel(2)
        const planMessages = filterMessageChannel(3)
        const lunchMessages = filterMessageChannel(4)

        return (
            <ul>
                <li>
                    <NavLink to={RANDOM_CHANNEL} activeClassName="active">
                        <span># really_random</span>
                        <span className="badge">{ randomMessages.length }</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={CHAT_CHANNEL} activeClassName="active">
                        <span># chat_stuff</span>
                        <span className="badge">{ chatMessages.length }</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PLAN_CHANNEL} activeClassName="active">
                        <span># lets_plan</span>
                        <span className="badge">{ planMessages.length }</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={LUNCH_CHANNEL} activeClassName="active">
                        <span># lunch_planning</span>
                        <span className="badge">{ lunchMessages.length }</span>
                    </NavLink>
                </li>
            </ul>
        )
    }
}

const mapState = state => {
    console.log(state)
    return ({ 
    messages: state.ChatStore.messages
})}

export default withRouter(connect(mapState,null)(ChannelList))