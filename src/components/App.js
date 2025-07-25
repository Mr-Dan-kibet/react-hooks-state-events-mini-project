// App.js
import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter tasks based on selected category
  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  // Add a new task
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Delete a task
  function handleDeleteTask(textToRemove) {
    const updatedTasks = tasks.filter((task) => task.text !== textToRemove);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />

      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
