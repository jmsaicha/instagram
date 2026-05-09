import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './Modal.css';

function Modal({ onClose }) {
  const [postText, setPostText] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
            <input type="file" accept="image/*" id="image-input" onChange={handleImageUpload} />
            <label htmlFor="image-input">
              <div className="upload-icon">📸</div>
              <p>Select Photo or Video</p>
              <span>You can share photos and videos here</span>
            </label>
          </div>

          {uploadedImage && (
            <div className="preview-section">
              <img src={uploadedImage} alt="Preview" />
              <textarea
                placeholder="Write a caption..."
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                maxLength={2200}
              />
              <div className="char-count">{postText.length}/2200</div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-share" onClick={() => {
            alert('Post created successfully!');
            onClose();
          }}>
            Share Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
