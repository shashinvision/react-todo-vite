import { useContext } from "react";
import { Task } from "../components/fragments/Task";
import { TasksContext } from "../context/TasksContext.jsx";

function Title() {
  return <h2>Task List</h2>;
}

export default function DescriptionTask() {
  const {tasks} = useContext(TasksContext);

  if (tasks.length > 0) {
    return (
      <div>
        <Title />
        {tasks.map((element, index) => {
          return <Task key={index} data={element} />;
        })}
      </div>
    );
  } else {
    return (
      <>
        <Title />
        <i>No hay registros</i>
      </>
    );
  }
}
