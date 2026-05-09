import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    username: 'james_aicha',
    fullName: 'James Aicha',
    avatar: 'https://i.pravatar.cc/150?img=0',
    bio: '📸 Photography enthusiast | 🌍 Traveler | 💻 Developer',
    followers: 1250,
    following: 342,
    posts: 145,
    verified: true,
    email: 'james@example.com'
  });

  const [posts, setPosts] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  return (
    <AppContext.Provider value={{
      currentUser,
      setCurrentUser,
      posts,
      setPosts,
      userProfile,
      setUserProfile
    }}>
      {children}
    </AppContext.Provider>
  );
};
