import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = () => {
  const { state } = useContext(TodoContext);

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'active') return !task.completed;
    if (state.filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="task-list">
      {state.isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="empty-state">
          <div className="holographic-display">
            <h3>No tasks found</h3>
            <p>Add a new task to get started</p>
          </div>
        </div>
      ) : (
        filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
};

export default TaskList;