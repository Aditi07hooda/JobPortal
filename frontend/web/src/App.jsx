import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import AddJob from "./Pages/AddJob";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/addJob" element={<AddJob />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
