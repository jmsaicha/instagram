import React from 'react';
import './Messages.css';

function Messages() {
  const [conversations] = React.useState([
    { id: 1, username: 'sarah_anderson', avatar: 'https://i.pravatar.cc/150?img=1', lastMessage: 'Love the sunset photo!', unread: 2 },
    { id: 2, username: 'mike_johnson', avatar: 'https://i.pravatar.cc/150?img=2', lastMessage: 'See you tomorrow!', unread: 0 },
    { id: 3, username: 'emma_davis', avatar: 'https://i.pravatar.cc/150?img=3', lastMessage: 'Check out my new post', unread: 1 },
    { id: 4, username: 'alex_turner', avatar: 'https://i.pravatar.cc/150?img=4', lastMessage: 'Thanks for the follow', unread: 0 },
    { id: 5, username: 'jordan_lee', avatar: 'https://i.pravatar.cc/150?img=5', lastMessage: 'Let\'s hang out!', unread: 1 },
  ]);

  const [selectedConversation, setSelectedConversation] = React.useState(1);

  return (
    <div className="messages-container">
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
  );
}

export default Messages;
