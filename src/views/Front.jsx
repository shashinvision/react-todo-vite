import NewTask from "../components/NewTask";
import DescriptionTask from "../components/DescriptionTask";
import {TasksContextProvider} from "../context/TasksContext";

const Front = ({ saludo }) => {
  if (saludo.length === 0) {
    saludo = "Invitado";
  }
  console.log("Probando Props: ", saludo);
  return (
    <TasksContextProvider>
      <NewTask />
      <DescriptionTask />
    </TasksContextProvider>
  );
};

export default Front;
