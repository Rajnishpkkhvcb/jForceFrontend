import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getTasks, addTask, deleteTask } from './api'; // Assuming you have a deleteTask function in your API

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);
    };
    fetchData();
  }, []);

  const handleAddTask = async () => {
    if (!newTaskTitle || !selectedDate) return;
    const newTask = {
      title: newTaskTitle,
      completed: false,
      date: selectedDate
    };
    const addedTask = await addTask(newTask);
    setTasks([...tasks, addedTask]);
    setNewTaskTitle('');
    setSelectedDate(null);
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleFinish = async (taskId) => {
    await handleFinish(taskId);
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>To-Do List</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter task"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <div className="input-group-append">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
                className="form-control"
              />
            </div>
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={handleAddTask}>Add Task</button>
            </div>
          </div>
          <ul className="list-group">
            {tasks.map((task) => (
              <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{task.title}</span>
              <div>
                <button className="btn btn-success mr-2" style={{background:"#FEBE10",border:"none"}}>Finish</button> {/* Green Finish button */}
                <button className="btn btn-danger" onClick={() => handleDeleteTask(task.id)}>Delete</button> {/* Red Delete button */}
              </div>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
