import { useState } from "react";
import Button from "../Components/Button";

const AddJob = () => {
  const [state, setState] = useState({
    jobId: 0,
    jobTitle: "",
    jobDescription: "",
    techStack: [],
    experience: 0,
    success: false,
    error: false,
  });

  const clearForm = () => {
    setState((prev) => ({
      ...prev,
      jobId: 0,
      jobTitle: "",
      jobDescription: "",
      techStack: [],
      experience: 0,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]:
        name === "jobId" || name === "experience" ? parseInt(value, 10) : value,
    }));
  };

  const handleTechStackChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setState((prev) => ({
      ...prev,
      techStack: selectedOptions,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/addJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: state.jobId,
          jobTitle: state.jobTitle,
          jobDescription: state.jobDescription,
          techStack: state.techStack,
          experience: state.experience,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.text();
      console.log(data);
      setState((prev) => ({ ...prev, success: true, error: false }));
      clearForm();
      // Reset success and error states
      setTimeout(() => {
        setState((prev) => ({ ...prev, success: false, error: false }));
      }, 5000);
    } catch (error) {
      console.error(error);
      setState((prev) => ({ ...prev, success: false, error: true }));
      clearForm();
      // Reset success and error states
      setTimeout(() => {
        setState((prev) => ({ ...prev, success: false, error: false }));
      }, 5000);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-3 text-center underline">
        Add Job
      </h2>
      {state.success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-5 py-3 rounded-md mb-4">
          Job Added Successfully!
        </div>
      )}
      {state.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-5 py-3 rounded-md mb-4">
          Error Adding Job. Please try again.
        </div>
      )}
      <form className="space-y-2" onSubmit={handleFormSubmit}>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="jobId"
          >
            Job ID:
          </label>
          <input
            type="number"
            id="jobId"
            name="jobId"
            value={state.jobId}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="jobTitle"
          >
            Job Title:
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={state.jobTitle}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="jobDescription"
          >
            Job Description:
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={state.jobDescription}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="techStack"
          >
            Tech Stack:
          </label>
          <select
            id="techStack"
            name="techStack"
            multiple
            value={state.techStack}
            onChange={handleTechStackChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="Spring Boot">Spring Boot</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="Tailwind CSS">Tailwind CSS</option>
            <option value="MySQL">MySQL</option>
            <option value="MongoDB">MongoDB</option>
          </select>
          <p className="text-sm text-gray-500 mt-1">
            Hold down Ctrl (Windows) or Command (Mac) to select multiple
            options.
          </p>
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="experience"
          >
            Required Experience (in years):
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={state.experience}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <Button text="Submit" type="submit" />
      </form>
    </div>
  );
};

export default AddJob;