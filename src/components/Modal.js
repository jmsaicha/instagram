import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './Modal.css';

function Modal({ onClose }) {
  const [postText, setPostText] = useState('');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Post</h2>
          <button className="close-btn" onClick={onClose}>
            <FiX size={24} />
          </button>
        </div>

        <div className="modal-body">
          <div className="image-upload">
            <input type="file" accept="image/*" id="image-input" />
            <label htmlFor="image-input">📷 Select Image</label>
          </div>

          <textarea
            placeholder="Write a caption..."
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            maxLength={2200}
          />

          <div className="char-count">{postText.length}/2200</div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-share" onClick={() => {
            alert('Post created!');
            onClose();
          }}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
