import React, { useState } from 'react';
import { FiHeart, FiMessageCircle, FiShare2, FiBookmark } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import './Post.css';

function Post({ post, onLike, onSave }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="post">
      <div className="post-header">
        <div className="author-info">
          <img src={post.avatar} alt={post.author} className="avatar" />
          <div className="author-details">
            <p className="author-name">{post.author}</p>
            <p className="timestamp">{post.timestamp}</p>
          </div>
        </div>
        <button className="more-btn">•••</button>
      </div>

      <div className="post-image">
        <img src={post.image} alt="Post" />
      </div>

      <div className="post-actions">
        <div className="action-buttons">
          <button className="action-btn" onClick={onLike}>
            {post.liked ? (
              <FaHeart size={24} color="#ed4956" />
            ) : (
              <FiHeart size={24} />
            )}
          </button>
          <button className="action-btn" onClick={() => setShowComments(!showComments)}>
            <FiMessageCircle size={24} />
          </button>
          <button className="action-btn">
            <FiShare2 size={24} />
          </button>
        </div>
        <button className="action-btn save-btn" onClick={onSave}>
          {post.saved ? (
            <FaHeart size={24} color="#ed4956" />
          ) : (
            <FiBookmark size={24} />
          )}
        </button>
      </div>

      <div className="post-stats">
        <p className="likes">{post.likes.toLocaleString()} likes</p>
        <p className="caption">
          <span className="caption-author">{post.author}</span> {post.caption}
        </p>
        <p className="comments-count" onClick={() => setShowComments(!showComments)}>
          View all {post.comments} comments
        </p>
      </div>

      {showComments && (
        <div className="comments-section">
          <div className="comment">
            <span className="comment-author">john_doe</span>
            <span className="comment-text">Amazing shot! 📸</span>
          </div>
          <div className="comment">
            <span className="comment-author">jane_smith</span>
            <span className="comment-text">Love this! ❤️</span>
          </div>
          <div className="comment-input">
            <input type="text" placeholder="Add a comment..." />
            <button>Post</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
