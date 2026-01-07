import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Packages from "./components/Packages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Packages />} />
        <Route path="/tours" element={<Packages />} />
      </Routes>
    </>
  );
}

export default App;
