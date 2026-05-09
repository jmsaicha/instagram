import React, { useState } from 'react';
import { FiHome, FiMessageCircle, FiHeart, FiCompass, FiMenu } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import './Header.css';

function Header({ onCreateClick }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <BsInstagram size={28} />
          <span>Instagram</span>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>

        <nav className="nav-icons">
          <button className="nav-btn" title="Home">
            <FiHome size={24} />
          </button>
          <button className="nav-btn" title="Messages">
            <FiMessageCircle size={24} />
          </button>
          <button className="nav-btn" title="Create" onClick={onCreateClick}>
            <FiCompass size={24} />
          </button>
          <button className="nav-btn" title="Likes">
            <FiHeart size={24} />
          </button>
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
          <a href="#profile">Profile</a>
          <a href="#settings">Settings</a>
          <a href="#saved">Saved</a>
          <hr />
          <a href="#logout">Log Out</a>
        </div>
      )}
    </header>
  );
}

export default Header;
