import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const Header = () => {
  const { state } = useContext(TodoContext);

  return (
    <header className={`header ${state.theme}`}>
      <div className="header-content">
        <div className="logo-container">
          <h1 className="app-title">NexusTask</h1>
          <div className="particles">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="particle" />
            ))}
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;