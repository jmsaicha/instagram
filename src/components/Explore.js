import React from 'react';
import './Explore.css';

function Explore() {
  const [posts] = React.useState([
    { id: 1, image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&h=300&fit=crop', likes: 1200 },
    { id: 2, image: 'https://images.unsplash.com/photo-1552668473-f5400afad56c?w=300&h=300&fit=crop', likes: 890 },
    { id: 3, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', likes: 2100 },
    { id: 4, image: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?w=300&h=300&fit=crop', likes: 1560 },
    { id: 5, image: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=300&h=300&fit=crop', likes: 945 },
    { id: 6, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop', likes: 2340 },
  ]);

  return (
    <div className="explore-container">
      <div className="explore-grid">
        {posts.map(post => (
          <div key={post.id} className="explore-item">
            <img src={post.image} alt="Post" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
