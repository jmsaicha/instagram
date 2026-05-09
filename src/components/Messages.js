import React, { useState } from 'react';
import './Messages.css';

function Messages() {
  const [conversations] = React.useState([
    { id: 1, username: 'sarah_and', avatar: 'https://i.pravatar.cc/150?img=1', lastMessage: 'Love the sunset photo!', unread: 2 },
    { id: 2, username: 'mike_john', avatar: 'https://i.pravatar.cc/150?img=2', lastMessage: 'See you tomorrow!', unread: 0 },
    { id: 3, username: 'emma_davis', avatar: 'https://i.pravatar.cc/150?img=3', lastMessage: 'Check out my new post', unread: 1 },
  ]);

  const [selectedConversation, setSelectedConversation] = React.useState(1);
  const [messages, setMessages] = React.useState([
    { id: 1, sender: 'sarah_and', text: 'Hi James!', time: '10:30 AM' },
    { id: 2, sender: 'me', text: 'Hey Sarah! How are you?', time: '10:31 AM' },
    { id: 3, sender: 'sarah_and', text: 'I\'m doing great! Love the sunset photo!', time: '10:32 AM' },
  ]);
  const [newMessage, setNewMessage] = React.useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'me', text: newMessage, time: 'now' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="messages-container">
      <div className="messages-sidebar">
        <div className="messages-header">
          <h2>Messages</h2>
        </div>
        <div className="conversations-list">
          {conversations.map(conv => (
            <div
              key={conv.id}
              className={`conversation ${selectedConversation === conv.id ? 'active' : ''}`}
              onClick={() => setSelectedConversation(conv.id)}
            >
              <img src={conv.avatar} alt={conv.username} />
              <div className="conversation-info">
                <p className="conversation-username">{conv.username}</p>
                <p className="conversation-message">{conv.lastMessage}</p>
              </div>
              {conv.unread > 0 && <span className="unread-badge">{conv.unread}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="messages-main">
        <div className="chat-header">
          <h3>{conversations.find(c => c.id === selectedConversation)?.username}</h3>
        </div>
        <div className="messages-list">
          {messages.map(msg => (
            <div key={msg.id} className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}>
              <p>{msg.text}</p>
              <span className="message-time">{msg.time}</span>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
