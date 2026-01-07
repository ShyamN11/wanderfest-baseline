import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Packages />} />
      </Routes>
    </>
  );
}

export default App;
