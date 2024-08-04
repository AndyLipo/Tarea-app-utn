// App.js
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskComplete = taskId => {
    // Implementa la lógica para marcar la tarea como completada
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDelete = taskId => {
    // Implementa la lógica para eliminar la tarea
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleTaskAdd = taskName => {
    // Implementa la lógica para agregar una nueva tarea
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Efecto con useEffect para mostrar un mensaje cuando la lista de tareas cambia
  useEffect(() => {
    console.log('La lista de tareas ha sido actualizada:', tasks);
  }, [tasks]);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onTaskDelete={handleTaskDelete}
      />
      <TaskForm onTaskAdd={handleTaskAdd} />
    </div>
  );
};

export default App;
