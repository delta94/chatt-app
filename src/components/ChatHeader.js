import React, { Component } from 'react';
import { Layout, Button, Avatar, notification } from 'antd';
import '../styles/style.css';
const { Header } = Layout;

class ChatHeader extends Component {

    handleLogOut = (e) => {
        this.props.logOut();
        notification.open({
            message: 'Logout successfully',
            description: 'Please login again'
        });
        this.props.sign.connection.close();
        this.props.disconnectSocket();
        this.props.pageLogin();
        this.props.loadMessage([]);
        this.props.loadConversationList({});
        this.props.loadChannelList({});
        this.props.changeCurrentChat({type: '', id: '', name: ''});
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    render() {
        const { currentChat, sign } = this.props;
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
            <div className='chat-header'>
                <div className='chat-header-left'>
                    <Avatar size='large' style={{ backgroundColor: '#87d068' }} icon={currentChat.type === 'channel' ? 'profile' : 'user' } />
                    <span className='user-name'>{
                        currentChat.name.length > 0 
                        ? currentChat.name 
                        : 'No conversation'
                    }</span>
                </div>
                <div className='chat-header-right'>
                    <div className='current-user-name'>
                        <span className='user-name'>{sign.user}</span>
                        <span className='subtitle'> (Logged in) </span>
                    </div>
                    <Button icon='logout' type='primary' shape='circle' onClick={this.handleLogOut} />
                </div>
            </div>
            </Header>
        );
    }
}

export default ChatHeader;
