import { useState } from 'react';
import { Menu, X, BookOpen, Brain, Settings } from 'lucide-react';
import "./header.css";
import { Link } from "react-router-dom";
const Header = ({ username = "John Doe" }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="header-container">
      {/* Header */}
      <header className="main-header">
        <div className="logo">arthagyan</div>
        
        <div className="user-section">
          <span className="username">{username}</span>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="menu-button"
            aria-label="Toggle navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="close-button"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#courses">
                <BookOpen size={20} />
                <span>Courses</span>
              </a>
            </li>
            <li>
              <a href="#quizzes">
                <Brain size={20} />
                <span>Quizzes</span>
              </a>
            </li>
            <li>
              <a href="#settings">
                <Settings size={20} />
                <span>Account Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;