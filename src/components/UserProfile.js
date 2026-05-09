import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './UserProfile.css';

function UserProfile({ user, onClose }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState('posts');

  const userPosts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=300&fit=crop' },
    { id: 2, image: 'https://images.unsplash.com/photo-1552668473-f5400afad56c?w=300&h=300&fit=crop' },
    { id: 3, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop' },
    { id: 4, image: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?w=300&h=300&fit=crop' },
  ];

  return (
    <div className="user-profile-modal" onClick={onClose}>
      <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
        {onClose && (
          <button className="profile-close-btn" onClick={onClose}>
            <FiX size={24} />
          </button>
        )}

        <div className="profile-header">
          <img src={user.avatar} alt={user.username} className="profile-header-avatar" />
          <div className="profile-header-info">
            <div className="profile-username-line">
              <h2>{user.username}</h2>
              {user.verified && <span className="verified">✓</span>}
            </div>
            <button 
              className={`follow-button ${isFollowing ? 'following' : ''}`}
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat">
            <p className="stat-value">{user.posts}</p>
            <p className="stat-label">posts</p>
          </div>
          <div className="stat">
            <p className="stat-value">{user.followers.toLocaleString()}</p>
            <p className="stat-label">followers</p>
          </div>
          <div className="stat">
            <p className="stat-value">{user.following}</p>
            <p className="stat-label">following</p>
          </div>
        </div>

        <div className="profile-bio">
          <h3>{user.fullName}</h3>
          <p>{user.bio}</p>
        </div>

        <div className="profile-tabs">
          <button className={`tab ${activeTab === 'posts' ? 'active' : ''}`} onClick={() => setActiveTab('posts')}>Posts</button>
          <button className={`tab ${activeTab === 'reels' ? 'active' : ''}`} onClick={() => setActiveTab('reels')}>Reels</button>
          <button className={`tab ${activeTab === 'tagged' ? 'active' : ''}`} onClick={() => setActiveTab('tagged')}>Tagged</button>
        </div>

        <div className="profile-posts-grid">
          {userPosts.map(post => (
            <div key={post.id} className="profile-post-item">
              <img src={post.image} alt="Post" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
