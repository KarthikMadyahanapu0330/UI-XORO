
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';
function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const handleTaskSaved = (newTask) => {
    if (editingTask) {
      setTasks(tasks.map((task) => (task.id === editingTask.id ? newTask : task)));
      setEditingTask(null);
    } else {
      newTask.id = tasks.length + 1;
      setTasks([...tasks, newTask]);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Task Management</h1>
      <TaskForm task={editingTask} onTaskSaved={handleTaskSaved} />
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
