import { useParams, useLocation } from "react-router-dom";
import NewTask from "../components/NewTask";

export default function EditTask() {
  const { id } = useParams();
  const location = useLocation();
  return (
    <>
      <NewTask data={location.state} />
    </>
  );
}
