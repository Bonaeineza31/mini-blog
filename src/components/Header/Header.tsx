import React, { useState } from 'react';
import './Header.css';

// Header component - Displays "Dev Insights" logo and New Post toast notification
export const Header: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleNewPostClick = () => {
    setShowToast(true);
    // Automatically hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo and Brand Name */}
        <div className="logo-group">
          <span className="logo-text">Dev Insights</span>
          <span className="logo-tag">Internal Blog</span>
        </div>

        {/* Navigation Bar */}
        <nav className="header-nav">
          <a href="#feed" className="nav-link">
            Blog Posts
          </a>
          <button className="btn-new-post" onClick={handleNewPostClick}>
            + New Post
          </button>
        </nav>
      </div>

      {/* Floating Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          <span>New Post feature is coming soon!</span>
        </div>
      )}
    </header>
  );
};
