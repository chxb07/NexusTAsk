import React from 'react';
import { TodoProvider } from './context/TodoContext';
import Header from './components/Header/Header';
import TaskInput from './components/TaskInput/TaskInput';
import Filters from './components/Filters/Filters';
import TaskList from './components/TaskList/TaskList';
import './styles/global.css';

const App = () => {
  return (
    <TodoProvider>
      <div className="app-container">
        <Header />  {/* Make sure this line exists */}
        <TaskInput />
        <Filters />
        <TaskList />
      </div>
    </TodoProvider>
  );
};

export default App;
