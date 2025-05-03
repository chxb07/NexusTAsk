import React, { useState, useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const { dispatch } = useContext(TodoContext);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_TASK',
      payload: { ...task, text: editText }
    });
    setIsEditing(false);
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'low':
        return 'rgba(0, 255, 0, 0.2)';
      case 'medium':
        return 'rgba(255, 165, 0, 0.2)';
      case 'high':
        return 'rgba(255, 0, 0, 0.2)';
      default:
        return 'rgba(255, 255, 255, 0.1)';
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        {isEditing ? (
          <form onSubmit={handleUpdate} className="edit-form">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-input"
              autoFocus
            />
            <button type="submit" className="save-btn">
              Save
            </button>
          </form>
        ) : (
          <>
            <div className="task-checkbox" onClick={handleToggle}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={handleToggle}
                className="hidden-checkbox"
              />
              <span className="custom-checkbox">
                {task.completed && (
                  <span className="checkmark">✓</span>
                )}
              </span>
            </div>
            <div className="task-text">{task.text}</div>
            <div className="task-actions">
              <button onClick={handleEdit} className="edit-btn">
                Edit
              </button>
              <button onClick={handleDelete} className="delete-btn">
                Delete
              </button>
            </div>
            <div 
              className="priority-indicator"
              style={{ backgroundColor: getPriorityColor() }}
            ></div>
          </>
        )}
      </div>
      {task.completed && (
        <div className="completion-effect"></div>
      )}
    </div>
  );
};

export default TaskItem;