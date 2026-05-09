import React from 'react';
import './Notifications.css';

function Notifications() {
  const [notifications] = React.useState([
    { id: 1, type: 'like', user: 'sarah_and', avatar: 'https://i.pravatar.cc/150?img=1', action: 'liked your post', time: '2 hours ago' },
    { id: 2, type: 'comment', user: 'mike_john', avatar: 'https://i.pravatar.cc/150?img=2', action: 'commented on your post', time: '4 hours ago' },
    { id: 3, type: 'follow', user: 'emma_davis', avatar: 'https://i.pravatar.cc/150?img=3', action: 'started following you', time: '1 day ago' },
    { id: 4, type: 'like', user: 'alex_turn', avatar: 'https://i.pravatar.cc/150?img=4', action: 'liked your photo', time: '2 days ago' },
  ]);

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h1>Notifications</h1>
      </div>
      <div className="notifications-list">
        {notifications.map(notif => (
          <div key={notif.id} className="notification-item">
            <img src={notif.avatar} alt={notif.user} />
            <div className="notification-content">
              <p><strong>{notif.user}</strong> {notif.action}</p>
              <span className="notification-time">{notif.time}</span>
            </div>
            {notif.type === 'follow' && <button className="follow-btn">Follow Back</button>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
