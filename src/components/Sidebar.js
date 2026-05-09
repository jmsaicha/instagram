import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const suggestedUsers = [
    { id: 1, name: 'Alex Turner', username: 'alex_turner', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 2, name: 'Jordan Lee', username: 'jordan_lee', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Chris Park', username: 'chris_park', avatar: 'https://i.pravatar.cc/150?img=6' },
    { id: 4, name: 'Taylor White', username: 'taylor_white', avatar: 'https://i.pravatar.cc/150?img=7' },
    { id: 5, name: 'Morgan Stone', username: 'morgan_stone', avatar: 'https://i.pravatar.cc/150?img=8' }
  ];

  return (
    <aside className="sidebar">
      <div className="profile-card">
        <img src="https://i.pravatar.cc/150?img=0" alt="Profile" className="profile-avatar" />
        <div className="profile-info">
          <p className="profile-username">james_aicha</p>
          <p className="profile-fullname">James Aicha</p>
        </div>
      </div>

      <div className="suggestions">
        <div className="suggestions-header">
          <h3>Suggestions For You</h3>
          <a href="#see-all">See All</a>
        </div>

        <div className="suggestions-list">
          {suggestedUsers.map(user => (
            <div key={user.id} className="suggestion-item">
              <div className="suggestion-user">
                <img src={user.avatar} alt={user.name} />
                <div className="suggestion-info">
                  <p className="suggestion-username">{user.username}</p>
                  <p className="suggestion-label">Suggested for you</p>
                </div>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
          ))}
        </div>
      </div>

      <footer className="sidebar-footer">
        <a href="#about">About</a>
        <a href="#help">Help</a>
        <a href="#press">Press</a>
        <a href="#api">API</a>
        <a href="#jobs">Jobs</a>
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
        <a href="#locations">Locations</a>
        <a href="#language">Language</a>
        <p>&copy; 2026 Instagram Clone</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
