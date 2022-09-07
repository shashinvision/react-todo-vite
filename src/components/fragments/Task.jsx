import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

export const Task = ({ data }) => {
  const { deleteTask } = useContext(TasksContext);
  return (
    <>
      <ul>
        <li>
          <b>Title: </b> <i>{data.title}</i>
        </li>
        <li>
          <b>Description: </b> <i>{data.description}</i>
        </li>
        <li>
          <button onClick={() => deleteTask(data.id)}>
            Edit task
          </button>
          <button style={{marginLeft: 10}} onClick={() => deleteTask(data.id)}>
            Delete task
          </button>
        </li>
      </ul>
      <hr/>
    </>
  );
};
