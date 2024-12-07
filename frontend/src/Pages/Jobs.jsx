import { useState, useEffect } from "react";
import JobCard from "../Components/JobCard";

const Jobs = () => {
  const [state, setState] = useState({
    jobs: [],
    searchText: "",
    job: [],
  });

  const fetchJobs = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/jobs`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      // console.log(data);
      setState((prev) => ({
        ...prev,
        jobs: data,
      }));
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    }
  };

  const updateJob = async ({
    id,
    jobTitle,
    jobDescription,
    techStack,
    experience,
  }) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/updateJob/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            jobTitle,
            jobDescription,
            techStack,
            experience,
          }),
        }
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.text();
      console.log(data);
      fetchJobs();
    } catch (error) {
      console.error("Failed to update jobs:", error);
    }
  };

  const deleteJob = async (jobId) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/deleteJob/${jobId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.text();
      console.log(data);
      fetchJobs();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchById = async () => {
    if (state.searchText.trim() === "") {
      fetchJobs();
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/job/search/${state.searchText}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setState((prev) => ({
        ...prev,
        job: data,
      }));
    } catch (error) {
      console.error("Failed to fetch job:", error);
      setState((prev) => ({
        ...prev,
        job: [],
      }));
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    handleSearchById();
  }, [state.searchText]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Job Listings
      </h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          id="search"
          name="search"
          value={state.searchText}
          onChange={(e) =>
            setState((prev) => ({ ...prev, searchText: e.target.value }))
          }
          placeholder="Search...."
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {state.job.length !== 0 &&
          state.searchText !== "" &&
          state.job.map((j) => (
            <div className="" key={j.id}>
              <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
                <JobCard
                  key={j.id}
                  job={j}
                  deleteJob={deleteJob}
                  updateJob={updateJob}
                />
              </div>
            </div>
          ))}
      </div>
      {state.job.length === 0 && state.searchText !== "" ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-5 justify-center flex">
          <p className="text-lg font-bold">Job not found!!</p>
        </div>
      ) : (
        state.searchText === "" && (
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {state.jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                deleteJob={deleteJob}
                updateJob={updateJob}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Jobs;