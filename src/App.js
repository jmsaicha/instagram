import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah Anderson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=600&fit=crop',
      caption: 'Beautiful sunset at the beach! 🌅',
      likes: 1234,
      comments: 45,
      liked: false,
      saved: false,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      author: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/150?img=2',
      image: 'https://images.unsplash.com/photo-1552668473-f5400afad56c?w=600&h=600&fit=crop',
      caption: 'Coffee and code - the perfect morning 💻☕',
      likes: 892,
      comments: 23,
      liked: false,
      saved: false,
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      author: 'Emma Davis',
      avatar: 'https://i.pravatar.cc/150?img=3',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      caption: 'Mountain views never get old! 🏔️',
      likes: 2156,
      comments: 67,
      liked: false,
      saved: false,
      timestamp: '6 hours ago'
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post
    ));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, saved: !post.saved } : post
    ));
  };

  return (
    <div className="app">
      <Header onCreateClick={() => setShowModal(true)} />
      <div className="app-body">
        <Feed posts={posts} onLike={handleLike} onSave={handleSave} />
        <Sidebar />
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
