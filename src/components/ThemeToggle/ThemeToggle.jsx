import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { state, dispatch } = useContext(TodoContext);

  const toggleTheme = () => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    dispatch({ type: 'TOGGLE_THEME', payload: newTheme });
  };

  return (
    <button className={`theme-toggle ${state.theme}`} onClick={toggleTheme}>
      <span className="toggle-track">
        <span className="toggle-thumb"></span>
      </span>
      <span className="toggle-icon">
        {state.theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default ThemeToggle;