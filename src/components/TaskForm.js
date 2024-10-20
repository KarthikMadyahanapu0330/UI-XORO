
import './TaskForm.css';
import React, { useState, useEffect } from 'react';

const TaskForm = ({ task, onTaskSaved }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    } else {
  
      setTitle('');
      setDescription('');
      setStatus('Pending');
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    onTaskSaved({ title, description, status });

 
    setTitle('');
    setDescription('');
    setStatus('Pending');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div>
        <label className="form-label">Title</label>
        <input
          type="text"
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
        />
      </div>
      <div>
        <label className="form-label">Description</label>
        <textarea
          className="description-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
        />
      </div>
      <div>
        <label className="form-label">Status</label>
        <select
          className="status-input"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="button-container">
        <button type="submit" className="form-button">Save Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
