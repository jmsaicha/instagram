import React, { useState } from 'react';
import Post from './Post';
import './MainFeed.css';

function MainFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah Anderson',
      username: 'sarah_and',
      avatar: 'https://i.pravatar.cc/150?img=1',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=600&fit=crop',
      caption: 'Beautiful sunset at the beach! 🏖️ Nothing beats golden hour photography. Tag someone you want to travel with!',
      location: 'Bali, Indonesia',
      likes: 1234,
      comments: 45,
      liked: false,
      saved: false,
      timestamp: '2 hours ago',
      likedBy: ['john_doe', 'jane_smith', '+32 more']
    },
    {
      id: 2,
      author: 'Mike Johnson',
      username: 'mike_john',
      avatar: 'https://i.pravatar.cc/150?img=2',
      image: 'https://images.unsplash.com/photo-1552668473-f5400afad56c?w=600&h=600&fit=crop',
      caption: 'Coffee and code - the perfect morning ☕💻 Working on something exciting. What\'s your favorite coding setup?',
      location: 'San Francisco, CA',
      likes: 892,
      comments: 23,
      liked: false,
      saved: false,
      timestamp: '4 hours ago',
      likedBy: ['alex_turn', '+22 more']
    },
    {
      id: 3,
      author: 'Emma Davis',
      username: 'emma_davis',
      avatar: 'https://i.pravatar.cc/150?img=3',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      caption: 'Mountain views never get old! 🏔️ Adventure awaits! Who\'s ready for a hiking trip?',
      location: 'Rocky Mountains, CO',
      likes: 2156,
      comments: 67,
      liked: false,
      saved: false,
      timestamp: '6 hours ago',
      likedBy: ['mike_john', 'sarah_and', '+54 more']
    },
    {
      id: 4,
      author: 'Alex Turner',
      username: 'alex_turn',
      avatar: 'https://i.pravatar.cc/150?img=4',
      image: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?w=600&h=600&fit=crop',
      caption: 'Fashion is the art of expression 👗✨ Loving this new collection!',
      location: 'New York, NY',
      likes: 1567,
      comments: 89,
      liked: false,
      saved: false,
      timestamp: '8 hours ago',
      likedBy: ['emma_davis', '+47 more']
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked, 
            likes: post.liked ? post.likes - 1 : post.likes + 1,
            likedBy: post.liked 
              ? post.likedBy.slice(0, -1)
              : ['you', ...post.likedBy.slice(0, -1), '+']
          } 
        : post
    ));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, saved: !post.saved } : post
    ));
  };

  const handleComment = (postId, comment) => {
    setPosts(posts.map(post =>
      post.id === postId 
        ? { ...post, comments: post.comments + 1 } 
        : post
    ));
  };

  return (
    <div className="main-feed">
      <div className="feed-container">
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
            onLike={() => handleLike(post.id)}
            onSave={() => handleSave(post.id)}
            onComment={(comment) => handleComment(post.id, comment)}
          />
        ))}
      </div>
    </div>
  );
}

export default MainFeed;
