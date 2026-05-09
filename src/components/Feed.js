import React from 'react';
import Post from './Post';
import './Feed.css';

function Feed({ posts, onLike, onSave }) {
  return (
    <div className="feed">
      <div className="feed-container">
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
            onLike={() => onLike(post.id)}
            onSave={() => onSave(post.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
