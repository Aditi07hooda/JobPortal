import PropTypes from "prop-types";
import Button from "./Button";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from "react";
import AddJob from "../Pages/AddJob";

const JobCard = ({ job, deleteJob, updateJob }) => {

  const [state, setState] = useState({
    showUpdateModal: false,
  })

  const handleOpenUpdateModal = () => {
    setState((prev)=>({
      ...prev,
      showUpdateModal: true
    }))
  }

  const handleCloseUpdateModal = () => {
    setState((prev)=>({
      ...prev,
      showUpdateModal: false
    }))
  }
 
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-blue-700">{job.jobTitle}</h2>
        <span className="text-gray-500">
          <b>Id:</b> {job.id}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{job.jobDescription}</p>
      {job.techStack && job.techStack.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-1">
            Tech Stack:
          </h3>
          <ul className="flex flex-wrap gap-2">
            {job.techStack.map((tech, index) => (
              <li
                key={index}
                className="text-xs text-white bg-blue-500 px-3 py-1 rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="text-sm text-gray-700">
        <span className="font-semibold">Experience:</span> {job.experience}{" "}
        years
      </p>
      <div className="flex justify-between items-center mt-10">
        <Button text="Update" onclick={handleOpenUpdateModal}/>
        <Modal open={state.showUpdateModal} onClose={handleCloseUpdateModal} center>
          <AddJob job={job} updateJob={updateJob} />
        </Modal>
        <button
          className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md text-white font-semibold"
          onClick={()=>deleteJob(job.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    jobTitle: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string),
    experience: PropTypes.number.isRequired,
  }).isRequired,
  deleteJob: PropTypes.func.isRequired,
  updateJob: PropTypes.func.isRequired,
};
