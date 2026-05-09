import React, { useState } from 'react';
import { FiHeart, FiMessageCircle, FiShare2, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { BiSolidLike } from 'react-icons/bi';
import './Post.css';

function Post({ post, onLike, onSave, onComment }) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [commentsList, setCommentsList] = useState([
    { id: 1, author: 'john_doe', avatar: 'https://i.pravatar.cc/30?img=10', text: 'Amazing shot! 📸', likes: 12, timestamp: '1h ago' },
    { id: 2, author: 'jane_smith', avatar: 'https://i.pravatar.cc/30?img=11', text: 'Love this! ❤️', likes: 8, timestamp: '45m ago' },
  ]);
  const [isLiking, setIsLiking] = useState(false);
  const [doubleTap, setDoubleTap] = useState(false);

  const handleDoubleClick = () => {
    if (!post.liked) {
      onLike();
      setDoubleTap(true);
      setTimeout(() => setDoubleTap(false), 600);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setCommentsList([...commentsList, {
        id: commentsList.length + 1,
        author: 'james_aicha',
        avatar: 'https://i.pravatar.cc/30?img=0',
        text: newComment,
        likes: 0,
        timestamp: 'now'
      }]);
      setNewComment('');
      onComment(newComment);
    }
  };

  return (
    <div className="post">
      {/* Post Header */}
      <div className="post-header">
        <div className="author-info">
          <img src={post.avatar} alt={post.author} className="avatar" />
          <div className="author-details">
            <div className="author-line">
              <p className="author-name">{post.author}</p>
              {post.verified && <span className="verified-badge">✓</span>}
            </div>
            <p className="location">{post.location}</p>
          </div>
        </div>
        <button className="more-btn">
          <FiMoreHorizontal size={18} />
        </button>
      </div>

      {/* Post Image with Double Tap Animation */}
      <div className="post-image" onDoubleClick={handleDoubleClick}>
        <img src={post.image} alt="Post" />
        {doubleTap && <div className="heart-animation"><FaHeart size={80} color="#fff" /></div>}
      </div>

      {/* Post Actions */}
      <div className="post-actions">
        <div className="action-buttons">
          <button className="action-btn" onClick={onLike} title="Like">
            {post.liked ? (
              <FaHeart size={24} color="#ed4956" />
            ) : (
              <FiHeart size={24} />
            )}
          </button>
          <button className="action-btn" onClick={() => setShowComments(!showComments)} title="Comment">
            <FiMessageCircle size={24} />
          </button>
          <button className="action-btn" title="Share">
            <FiShare2 size={24} />
          </button>
        </div>
        <button className="action-btn save-btn" onClick={onSave} title="Save">
          {post.saved ? (
            <FaHeart size={24} color="#ed4956" />
          ) : (
            <FiBookmark size={24} />
          )}
        </button>
      </div>

      {/* Post Stats */}
      <div className="post-stats">
        <p className="likes-count">{post.likes.toLocaleString()} likes</p>
        
        <div className="liked-by">
          <span>Liked by </span>
          <strong>{post.likedBy[0] === 'you' ? 'you' : post.likedBy[0]}</strong>
          {post.likedBy.length > 2 && (
            <>
              <span> and </span>
              <strong>{post.likedBy[post.likedBy.length - 1]}</strong>
            </>
          )}
        </div>

        <p className="caption">
          <span className="caption-author">{post.author}</span> {post.caption}
        </p>
        
        <p className="comments-count" onClick={() => setShowComments(!showComments)}>
          View all {post.comments} comments
        </p>
        
        <p className="timestamp">{post.timestamp}</p>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="comments-section">
          <div className="comments-list">
            {commentsList.map(comment => (
              <div key={comment.id} className="comment">
                <img src={comment.avatar} alt={comment.author} className="comment-avatar" />
                <div className="comment-content">
                  <div className="comment-text">
                    <span className="comment-author">{comment.author}</span> {comment.text}
                  </div>
                  <div className="comment-meta">
                    <span className="comment-time">{comment.timestamp}</span>
                    <button className="comment-like">{comment.likes > 0 ? comment.likes : 'Like'}</button>
                    <button className="reply-btn">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="comment-input">
            <img src="https://i.pravatar.cc/30?img=0" alt="Avatar" className="input-avatar" />
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
            />
            {newComment && <button className="post-comment-btn" onClick={handleAddComment}>Post</button>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
