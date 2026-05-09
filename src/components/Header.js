import React, { useState } from 'react';
import { FiHome, FiMessageCircle, FiHeart, FiCompass, FiMenu, FiUser, FiSearch, FiX } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import './Header.css';

function Header({ onCreateClick, onNavigate, currentPage, unreadMessages, unreadNotifications }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'home', icon: <FiHome size={24} />, label: 'Home' },
    { id: 'explore', icon: <FiCompass size={24} />, label: 'Explore' },
    { id: 'messages', icon: <FiMessageCircle size={24} />, label: 'Messages', badge: unreadMessages > 0 ? unreadMessages : null },
    { id: 'notifications', icon: <FiHeart size={24} />, label: 'Notifications', badge: unreadNotifications > 0 ? unreadNotifications : null },
    { id: 'profile', icon: <FiUser size={24} />, label: 'Profile' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <FaInstagram size={28} />
          <span>Instagram</span>
        </div>

        <div className={`search-box ${showSearch ? 'active' : ''}`}>
          <FiSearch size={16} />
          <input 
            type="text" 
            placeholder="Search users, hashtags, posts..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearch(true)}
          />
          {showSearch && (
            <button className="clear-search" onClick={() => {
              setSearchQuery('');
              setShowSearch(false);
            }}>
              <FiX size={16} />
            </button>
          )}
          {showSearch && searchQuery && (
            <div className="search-results">
              <div className="search-item">Search results for "{searchQuery}"</div>
              <div className="search-item">Users with {searchQuery}</div>
              <div className="search-item">Posts with #{searchQuery}</div>
            </div>
          )}
        </div>

        <nav className="nav-icons">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-btn ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
              title={item.label}
            >
              <div className="nav-icon-wrapper">
                {item.icon}
                {item.badge && <span className="badge">{item.badge}</span>}
              </div>
            </button>
          ))}
          <button
            className="nav-btn menu-toggle"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FiMenu size={24} />
          </button>
        </nav>
      </div>

      {showMenu && (
        <div className="menu-dropdown">
          <a href="#profile">👤 Profile</a>
          <a href="#saved">🔖 Saved</a>
          <a href="#settings">⚙️ Settings</a>
          <a href="#theme">🌙 Switch theme</a>
          <hr />
          <a href="#logout" className="logout">Log Out</a>
        </div>
      )}
    </header>
  );
}

export default Header;
