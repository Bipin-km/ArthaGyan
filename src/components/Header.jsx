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
        <Link to='/' className="logo"><img src="./ag.png" alt="pandey is gey" style={{width:'10%'}}/></Link>
        
        <div className="user-section">
        <Link to="/profile" className="username" style={{ textDecoration: 'none' }}>
  {username}
</Link>
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
                <Link to= '/courseboard'  style={{ textDecoration: 'none' }}>Courses</Link>
              </a>
            </li>
            <li>
              <a href="#quizzes">
                <Brain size={20} />
                <Link to='/quizboard'  style={{ textDecoration: 'none' }}>Quizzes</Link>
              </a>
            </li>
            <li>
              <a href="#settings"  style={{ textDecoration: 'none' }}>
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