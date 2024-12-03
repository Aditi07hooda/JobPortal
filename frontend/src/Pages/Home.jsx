import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function Home() {
  const navigate = useNavigate();

  const ViewJob = () => {
    navigate("/jobs");
  };

  const AddJob = () => {
    navigate("/addJob");
  };

  return (
    <>
      <div className="flex gap-5 justify-center mt-28">
        <Button text="View All Jobs" onclick={ViewJob} />
        <Button text="Add Job" onclick={AddJob} />
      </div>
    </>
  );
}
