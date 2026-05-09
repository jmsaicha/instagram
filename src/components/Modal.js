import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './Modal.css';

function Modal({ onClose }) {
  const [postText, setPostText] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [filters, setFilters] = useState('normal');
  const [currentStep, setCurrentStep] = useState('upload');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setCurrentStep('edit');
      };
      reader.readAsDataURL(file);
    }
  };

  const filterOptions = [
    { name: 'Normal', value: 'normal' },
    { name: 'Warm', value: 'warm' },
    { name: 'Cool', value: 'cool' },
    { name: 'Vintage', value: 'vintage' },
    { name: 'B&W', value: 'bw' },
    { name: 'Vivid', value: 'vivid' }
  ];

  const getFilterCSS = () => {
    const filters = {
      normal: 'filter(brightness(1) contrast(1) saturate(1))',
      warm: 'filter(brightness(1.1) sepia(0.2) saturate(1.2))',
      cool: 'filter(brightness(0.95) saturate(0.8) hue-rotate(200deg))',
      vintage: 'filter(sepia(0.4) saturate(0.7) brightness(1.1))',
      bw: 'filter(grayscale(1) contrast(1.1))',
      vivid: 'filter(saturate(1.5) brightness(1.05) contrast(1.1))'
    };
    return filters[filters] || filters.normal;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {currentStep === 'edit' && (
            <button className="back-btn" onClick={() => {
              setCurrentStep('upload');
              setUploadedImage(null);
            }}>← Back</button>
          )}
          <h2>{currentStep === 'upload' ? 'Create New Post' : 'Edit & Share'}</h2>
          <button className="close-btn" onClick={onClose}>
            <FiX size={24} />
          </button>
        </div>

        <div className="modal-body">
          {currentStep === 'upload' ? (
            <div className="upload-section">
              <div className="image-upload">
                <input type="file" accept="image/*" id="image-input" onChange={handleImageUpload} />
                <label htmlFor="image-input">
                  <div className="upload-icon">📸</div>
                  <p>Select Photo or Video</p>
                  <span>You can share photos and videos here</span>
                </label>
              </div>
            </div>
          ) : (
            <div className="edit-section">
              <div className="edit-container">
                <div className="image-preview">
                  <img src={uploadedImage} alt="Preview" style={{ filter: getFilterCSS() }} />
                </div>
                <div className="edit-options">
                  <div className="filters-section">
                    <h3>Filters</h3>
                    <div className="filters-grid">
                      {filterOptions.map(filter => (
                        <button
                          key={filter.value}
                          className={`filter-btn ${filters === filter.value ? 'active' : ''}`}
                          onClick={() => setFilters(filter.value)}
                          style={{ filter: filter.value !== 'normal' ? getFilterCSS().replace('normal', filter.value) : 'none' }}
                        >
                          <img src={uploadedImage} alt={filter.name} />
                          <span>{filter.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="caption-section">
                    <h3>Write a caption...</h3>
                    <textarea
                      placeholder="What's on your mind?"
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                      maxLength={2200}
                    />
                    <div className="char-count">{postText.length}/2200</div>
                  </div>

                  <div className="location-section">
                    <input type="text" placeholder="Add location" />
                  </div>

                  <div className="settings-section">
                    <label className="checkbox-label">
                      <input type="checkbox" /> Turn off commenting
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" /> Hide likes count
                    </label>
                  </div>
                </div>
              </div>
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
            {currentStep === 'upload' ? 'Next' : 'Share Now'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
