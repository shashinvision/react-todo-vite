import NewTask from "../components/NewTask";
import DescriptionTask from "../components/DescriptionTask";

const Front = ({ saludo }) => {
  if (saludo.length === 0) {
    saludo = "Invitado";
  }
  console.log("Probando Props: ", saludo);
  return (
    <>
      <NewTask />
      <DescriptionTask />
    </>
  );
};

export default Front;
