import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function submitNewTask(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category }); //callback function when task is added
    setText("");
    setCategory("Code");

  }


  return (
    <form className="new-task-form" onSubmit={submitNewTask}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(event) => setText(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChage={(event) => setCategory(event.target.value)} >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
