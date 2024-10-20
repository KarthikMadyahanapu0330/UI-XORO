
import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <li className="task-item">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <span className={`status ${task.status.toLowerCase()}`}>
        {task.status}
      </span>
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button className="delete" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
