import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export default function NewTask({id}) {
  const { addTask, editTask } = useContext(TasksContext);

  function createTask() {
      let title = document.getElementById("titleTask").value;
      let description = document.getElementById("descriptionTask").value;
      if (addTask({ title, description })) {
        clean();
      }
  }

  function saveTask() {
    alert("en editar")
    console.log(id)
  }
  const clean = () => {
    document.getElementById("titleTask").value = "";
    document.getElementById("descriptionTask").value = "";
  };

  return (
    <>
      <h1>To Do List</h1>
      <hr />
      <div>
        <label htmlFor="newTask">Title Task: </label>
        <input type="text" name="titleTask" id="titleTask" autoFocus />
        <br />
        <label htmlFor="descriptionTask">Description Task: </label>
        <input type="text" name="descriptionTask" id="descriptionTask" />
        <br />
        <button type="button" onClick={(id === undefined ) ? createTask : saveTask}>
          Save
        </button>
      </div>
    </>
  );
}
