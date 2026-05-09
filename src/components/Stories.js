import React, { useState } from 'react';
import { FiHeart, FiMessageCircle, FiShare2, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import './Stories.css';

function Stories() {
  const [stories] = useState([
    { id: 1, username: 'sarah_and', avatar: 'https://i.pravatar.cc/100?img=1', hasStory: true },
    { id: 2, username: 'mike_john', avatar: 'https://i.pravatar.cc/100?img=2', hasStory: true },
    { id: 3, username: 'emma_davis', avatar: 'https://i.pravatar.cc/100?img=3', hasStory: false },
    { id: 4, username: 'alex_turn', avatar: 'https://i.pravatar.cc/100?img=4', hasStory: true },
    { id: 5, username: 'jordan_l', avatar: 'https://i.pravatar.cc/100?img=5', hasStory: true },
    { id: 6, username: 'chris_p', avatar: 'https://i.pravatar.cc/100?img=6', hasStory: false },
  ]);

  return (
    <div className="stories-container">
      <div className="stories-wrapper">
        <div className="story-item your-story">
          <div className="story-avatar-wrapper">
            <img src="https://i.pravatar.cc/100?img=0" alt="Your story" />
            <button className="add-story-btn">+</button>
          </div>
          <p>Your Story</p>
        </div>

        {stories.map(story => (
          <div key={story.id} className="story-item">
            <div className={`story-avatar-wrapper ${story.hasStory ? 'has-story' : ''}`}>
              <img src={story.avatar} alt={story.username} />
            </div>
            <p>{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
