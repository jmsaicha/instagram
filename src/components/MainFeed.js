import React, { useState } from 'react';
import { FiHeart, FiMessageCircle, FiShare2, FiBookmark } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import './MainFeed.css';

function MainFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'nairobi_gossip_club',
      username: 'nairobi_gossip_club',
      avatar: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a826?w=150&h=150&fit=crop',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=600&fit=crop',
      caption: 'Methamphetamine Worth KSh 10.5 Million Intercepted At JKIA Hidden Inside Handbags Bound For Philippines',
      location: 'Nairobi, Kenya',
      likes: 1234,
      comments: 45,
      liked: false,
      saved: false,
      timestamp: '2 hours ago',
      verified: true
    },
    {
      id: 2,
      author: 'african.njiwa',
      username: 'african.njiwa',
      avatar: 'https://i.pravatar.cc/150?img=2',
      image: 'https://images.unsplash.com/photo-1552668473-f5400afad56c?w=600&h=600&fit=crop',
      caption: 'Morning vibes at the office. New week, new goals! 💼',
      location: 'Nairobi, Kenya',
      likes: 892,
      comments: 23,
      liked: false,
      saved: false,
      timestamp: '4 hours ago',
      verified: false
    },
    {
      id: 3,
      author: 'jackie_me',
      username: 'jackie_me',
      avatar: 'https://i.pravatar.cc/150?img=3',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      caption: 'Family time is the best time! 👨‍👩‍👧‍👦 Love these moments',
      location: 'Kisumu, Kenya',
      likes: 2156,
      comments: 67,
      liked: false,
      saved: false,
      timestamp: '6 hours ago',
      verified: false
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked, 
            likes: post.liked ? post.likes - 1 : post.likes + 1
          } 
        : post
    ));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, saved: !post.saved } : post
    ));
  };

  return (
    <div className="mobile-feed-container">
      {posts.map(post => (
        <div key={post.id} className="mobile-post">
          {/* Post Header */}
          <div className="post-header-mobile">
            <div className="author-section">
              <img src={post.avatar} alt={post.author} className="post-avatar" />
              <div className="author-info">
                <div className="author-line">
                  <span className="author-name">{post.author}</span>
                  {post.verified && <span className="verified-badge">✓</span>}
                </div>
                <span className="post-location">{post.location}</span>
              </div>
            </div>
            <button className="more-options">⋯</button>
          </div>

          {/* Post Image */}
          <div className="post-image-mobile">
            <img src={post.image} alt="Post" />
          </div>

          {/* Post Actions */}
          <div className="post-actions-mobile">
            <div className="action-left">
              <button className="action-icon" onClick={() => handleLike(post.id)}>
                {post.liked ? <FaHeart color="#ed4956" size={24} /> : <FiHeart size={24} />}
              </button>
              <button className="action-icon">
                <FiMessageCircle size={24} />
              </button>
              <button className="action-icon">
                <FiShare2 size={24} />
              </button>
            </div>
            <button className="action-icon" onClick={() => handleSave(post.id)}>
              {post.saved ? <FaHeart color="#ed4956" size={24} /> : <FiBookmark size={24} />}
            </button>
          </div>

          {/* Post Stats */}
          <div className="post-stats-mobile">
            <p className="likes-count">{post.likes.toLocaleString()} likes</p>
            <p className="post-caption">
              <strong>{post.author}</strong> {post.caption}
            </p>
            <p className="comments-link">{post.comments} comments</p>
            <p className="post-time">{post.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainFeed;
