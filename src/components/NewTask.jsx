import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";

export default function NewTask({ data }) {
  const navigateTo = useNavigate();
  const { addTask, editTask } = useContext(TasksContext);

  function createTask() {
    let title = document.getElementById("titleTask").value;
    let description = document.getElementById("descriptionTask").value;
    if (addTask({ title, description })) {
      clean();
    }
  }

  function saveTask() {
    const title = document.getElementById("titleTask").value;
    const description = document.getElementById("descriptionTask").value;
    editTask({ id: data.id, title, description });
    navigateTo("/");
    clean();
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
        <input
          type="text"
          name="titleTask"
          id="titleTask"
          autoFocus
          defaultValue={data != undefined ? data.title : ""}
        />
        <br />
        <label htmlFor="descriptionTask">Description Task: </label>
        <input
          type="text"
          name="descriptionTask"
          id="descriptionTask"
          defaultValue={data != undefined ? data.description : ""}
        />
        <br />
        <button
          type="button"
          onClick={data === undefined ? createTask : saveTask}
        >
          {data != undefined ? "Edit" : "Save"}
        </button>
      </div>
    </>
  );
}
