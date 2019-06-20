import React, { Component } from 'react'
import Main from './Main';
import Message from './Message';
import MessagesList from './MessagesList';
import NameEntry from './NameEntry';
import Navbar from './Navbar';
import NewMessageEntry from './NewMessageEntry';
import Sidebar from './Sidebar';
import ChannelList from './ChannelList';

class Test extends Component{
    render(){

    return(
        <div>
    <Main/>
    <Message/>
    <MessagesList/>
    <NameEntry/>
    <Navbar/>
    <NewMessageEntry/>
    <Sidebar/>
    <ChannelList/>
    </div>
    )
    }

}

export default Test;
