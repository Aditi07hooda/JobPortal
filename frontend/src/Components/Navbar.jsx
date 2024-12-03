import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-700 py-5 px-20 z-10">
      <div className="flex justify-between items-center">
        <Link to="/">
          <h2 className="text-white font-bold text-3xl cursor-pointer">
            Job Portal
          </h2>
        </Link>
        <div className="flex gap-5 text-lg font-semibold">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/jobs" className="text-white hover:underline">
            All Jobs
          </Link>
          <Link to="/addJob" className="text-white hover:underline">
            Add Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;