import { useParams } from "react-router-dom";
import NewTask from "../components/NewTask";

export default function EditTask() {
  const { id } = useParams();
  return (
    <>
      <NewTask id={id} />
    </>
  );
}
