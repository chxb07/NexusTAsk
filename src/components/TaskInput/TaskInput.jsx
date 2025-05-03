import React, { useState, useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import './TaskInput.css';

const TaskInput = () => {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('medium');
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
      priority,
      createdAt: new Date().toISOString()
    };

    dispatch({ type: 'ADD_TASK', payload: newTask });
    setInput('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task..."
          className="task-input"
        />
        <div className="priority-selector">
          <button
            type="button"
            className={`priority-btn low ${priority === 'low' ? 'active' : ''}`}
            onClick={() => setPriority('low')}
          >
            Low
          </button>
          <button
            type="button"
            className={`priority-btn medium ${priority === 'medium' ? 'active' : ''}`}
            onClick={() => setPriority('medium')}
          >
            Medium
          </button>
          <button
            type="button"
            className={`priority-btn high ${priority === 'high' ? 'active' : ''}`}
            onClick={() => setPriority('high')}
          >
            High
          </button>
        </div>
      </div>
      <button type="submit" className="add-btn">
        <span className="btn-text">Add Task</span>
        <span className="btn-icon">+</span>
      </button>
    </form>
  );
};

export default TaskInput;