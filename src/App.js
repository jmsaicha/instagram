import React, { useState } from 'react';
import { FiPlus, FiHeart, FiHome, FiPlay, FiSend, FiSearch, FiUser, FiMenu } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import './App.css';
import Header from './components/Header';
import Stories from './components/Stories';
import MainFeed from './components/MainFeed';
import BottomNavigation from './components/BottomNavigation';
import Modal from './components/Modal';
import UserProfile from './components/UserProfile';
import Explore from './components/Explore';
import Messages from './components/Messages';
import Notifications from './components/Notifications';
import SavedPosts from './components/SavedPosts';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [unreadMessages, setUnreadMessages] = useState(3);
  const [unreadNotifications, setUnreadNotifications] = useState(5);

  const handleCreateClick = () => setShowModal(true);
  const handleNavigate = (page) => setCurrentPage(page);
  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setShowUserProfile(true);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="mobile-feed">
            <Stories />
            <MainFeed />
          </div>
        );
      case 'explore':
        return <Explore />;
      case 'messages':
        return <Messages />;
      case 'notifications':
        return <Notifications />;
      case 'saved':
        return <SavedPosts />;
      case 'profile':
        return (
          <UserProfile 
            user={{
              username: 'james_aicha',
              fullName: 'James Aicha',
              bio: '📸 Photography enthusiast | 🌍 Traveler | 💻 Developer',
              avatar: 'https://i.pravatar.cc/300?img=0',
              followers: 1250,
              following: 342,
              posts: 145,
              verified: true
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app mobile-app">
      <Header 
        onCreateClick={handleCreateClick}
        onNavigate={handleNavigate}
        currentPage={currentPage}
        unreadMessages={unreadMessages}
        unreadNotifications={unreadNotifications}
      />
      <div className="app-content">
        {renderContent()}
      </div>
      <BottomNavigation 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        unreadMessages={unreadMessages}
        unreadNotifications={unreadNotifications}
      />
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      {showUserProfile && (
        <UserProfile 
          user={selectedUser} 
          onClose={() => setShowUserProfile(false)}
        />
      )}
    </div>
  );
}

export default App;
