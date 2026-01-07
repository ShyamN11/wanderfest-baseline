import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Home from "./pages/Home";
import TourDetails from "./pages/TourDetails";
import Gallery from "./pages/Gallery";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Packages />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <FloatingButtons />
    </>
  );
}

export default App;
