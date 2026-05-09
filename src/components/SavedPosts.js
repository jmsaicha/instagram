import React from 'react';
import './SavedPosts.css';

function SavedPosts() {
  const [savedPosts] = React.useState([
    { id: 1, image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=300&fit=crop', title: 'Beach Sunset' },
    { id: 2, image: 'https://images.unsplash.com/photo-1552668473-f5400afad56c?w=300&h=300&fit=crop', title: 'Morning Coffee' },
    { id: 3, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', title: 'Mountain View' },
    { id: 4, image: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?w=300&h=300&fit=crop', title: 'Fashion' },
  ]);

  return (
    <div className="saved-posts-container">
      <div className="saved-header">
        <h2>Saved</h2>
      </div>
      <div className="saved-grid">
        {savedPosts.map(post => (
          <div key={post.id} className="saved-item">
            <img src={post.image} alt={post.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedPosts;
