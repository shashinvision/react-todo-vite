import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import { Link } from "react-router-dom";

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
          <Link to={"edit/" + data.id}>Edit task</Link>
          <button
            style={{ marginLeft: 10 }}
            onClick={() => deleteTask(data.id)}
          >
            Delete task
          </button>
        </li>
      </ul>
      <hr />
    </>
  );
};
