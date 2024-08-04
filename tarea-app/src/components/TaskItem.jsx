// TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {task.name}{' '}
      <button onClick={handleComplete}>
        {completed ? 'Desmarcar' : 'Completar'}
      </button>
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
