import React, { useState } from 'react';
import './Stories.css';

function Stories() {
  const [stories] = useState([
    { id: 1, username: 'Your story', avatar: 'https://i.pravatar.cc/100?img=0', hasStory: false, isOwnStory: true },
    { id: 2, username: 'nairobi_gossip...', avatar: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a826?w=100&h=100&fit=crop', hasStory: true },
    { id: 3, username: 'african.njiwa', avatar: 'https://i.pravatar.cc/100?img=2', hasStory: true },
    { id: 4, username: 'jackie_me', avatar: 'https://i.pravatar.cc/100?img=3', hasStory: true },
    { id: 5, username: 'tech_stories', avatar: 'https://i.pravatar.cc/100?img=4', hasStory: true },
    { id: 6, username: 'travel_diaries', avatar: 'https://i.pravatar.cc/100?img=5', hasStory: true },
  ]);

  return (
    <div className="mobile-stories">
      <div className="stories-scroll">
        {stories.map((story) => (
          <div key={story.id} className="story-item-mobile">
            <div className={`story-ring ${story.hasStory ? 'active' : ''}`}>
              <img src={story.avatar} alt={story.username} />
              {story.isOwnStory && <span className="story-add-btn">+</span>}
            </div>
            <p className="story-username">{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
