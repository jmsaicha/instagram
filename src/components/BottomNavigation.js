import React from 'react';
import { FiHome, FiPlay, FiSend, FiSearch, FiUser } from 'react-icons/fi';
import './BottomNavigation.css';

function BottomNavigation({ currentPage, onNavigate, unreadMessages, unreadNotifications }) {
  const navItems = [
    { id: 'home', icon: <FiHome size={24} />, label: 'Home' },
    { id: 'explore', icon: <FiSearch size={24} />, label: 'Explore' },
    { id: 'messages', icon: <FiSend size={24} />, label: 'Messages', badge: unreadMessages },
    { id: 'notifications', icon: <FiPlay size={24} />, label: 'Reels' },
    { id: 'profile', icon: <FiUser size={24} />, label: 'Profile' }
  ];

  return (
    <nav className="bottom-navigation">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
          title={item.label}
        >
          {item.icon}
          {item.badge > 0 && <span className="nav-badge">{item.badge}</span>}
        </button>
      ))}
    </nav>
  );
}

export default BottomNavigation;
