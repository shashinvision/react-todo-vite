import { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

export const TasksContext = createContext();

export function TasksContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  const getLastArrItem = (arr) => {
    let lastItem = arr[arr.length - 1];
    console.log(`Last element is ${JSON.stringify(lastItem.id)}`);
    return lastItem.id;
  };
  function addTask(task) {
    const id = getLastArrItem(tasks) + 1;
    setTasks([
      ...tasks,
      {
        id,
        title: task.title,
        description: task.description,
      },
    ]);
    return true;
  }
  function editTask(id) {
    alert('Please'+ id)
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        editTask,
      }}
    >
      <h1>Componente Context</h1>
      {props.children}
    </TasksContext.Provider>
  );
}
