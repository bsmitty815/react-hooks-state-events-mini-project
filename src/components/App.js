import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksData, setTasksData] = useState(TASKS)
  const [categories, setCategories] = useState("ALL")
  //console.log(tasksData)
  //console.log(categoriesData)

  function deleteTask(deletedTask) {
    //once the button to remove a task is clicked we take that specific task and
    //remove it from the lists of tasks
    setTasksData(tasksData.filter((task) => (
      task.text !== deletedTask
    )))
  }

  function onTaskFormSubmit(newTask) {
    // you spread ... operator to add the new task into a new array of tasksdata
    setTasksData([...tasksData, newTask])
  }

  const tasksShown = tasksData.filter(
    //filters through tasks and shows all categories or specific category tasks
    (task) => categories === "ALL" || task.category === categories
  )


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}  categoriesData={categories} categoryClicked={setCategories} />
      <NewTaskForm categories={CATEGORIES.filter((category) => category !== "ALL")}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <ul>
        <TaskList tasks={tasksShown} deleteTask={deleteTask}/>
      </ul>
    </div>
  );
}

export default App;
