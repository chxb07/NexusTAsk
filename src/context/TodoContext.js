import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  tasks: [],
  filter: 'all',
  theme: 'dark',
  isLoading: true
};

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return { ...state, tasks: action.payload, isLoading: false };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        )
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'TOGGLE_THEME':
      document.documentElement.className = action.payload;
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Load tasks and theme from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('futuristic-tasks')) || [];
    const savedTheme = localStorage.getItem('futuristic-theme') || 'dark';
    
    dispatch({ type: 'SET_TASKS', payload: savedTasks });
    dispatch({ type: 'TOGGLE_THEME', payload: savedTheme });
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    if (!state.isLoading) {
      localStorage.setItem('futuristic-tasks', JSON.stringify(state.tasks));
    }
  }, [state.tasks, state.isLoading]);

  // Save theme to localStorage
  useEffect(() => {
    if (!state.isLoading) {
      localStorage.setItem('futuristic-theme', state.theme);
    }
  }, [state.theme, state.isLoading]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };