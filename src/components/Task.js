import React from "react";

function Task({ text, category, deleteTask}) {


  function deletedTaskButtonClicked() {
    //created a funciton so that once this button is clicked it makes a call back to
    //delete the text and refilter in the tasklist.js file
    deleteTask(text)
  }


  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deletedTaskButtonClicked}>X</button>
    </div>
  );
}

export default Task;
