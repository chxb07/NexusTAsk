import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import './Filters.css';

const Filters = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleFilterChange = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <div className="filters">
      <button
        className={`filter-btn ${state.filter === 'all' ? 'active' : ''}`}
        onClick={() => handleFilterChange('all')}
      >
        All
      </button>
      <button
        className={`filter-btn ${state.filter === 'active' ? 'active' : ''}`}
        onClick={() => handleFilterChange('active')}
      >
        Active
      </button>
      <button
        className={`filter-btn ${state.filter === 'completed' ? 'active' : ''}`}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;