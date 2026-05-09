import React, { useState } from 'react';
import { FiHome, FiPlay, FiSend, FiSearch, FiUser } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import './Header.css';

function Header({ onCreateClick, onNavigate, currentPage, unreadMessages, unreadNotifications }) {
  return (
    <header className="mobile-header">
      <div className="header-mobile-container">
        <div className="header-left">
          <button className="header-icon-btn">+</button>
        </div>
        
        <div className="header-center">
          <h1 className="instagram-logo">Instagram</h1>
        </div>
        
        <div className="header-right">
          <button className="header-icon-btn notification-btn">
            ❤️
            <span className="notification-dot"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
