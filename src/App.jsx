import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Home from "./pages/Home";
import TourDetails from "./pages/TourDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Packages />} />
        <Route path="/tour/:id" element={<TourDetails />} />
      </Routes>
    </>
  );
}

export default App;
