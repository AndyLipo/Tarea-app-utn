// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onTaskAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onTaskAdd(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
