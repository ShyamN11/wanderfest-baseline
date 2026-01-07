import { Routes, Route } from "react-router-dom";

import Packages from "./components/Packages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Packages />} />
        <Route path="/tours" element={<Packages />} />
      </Routes>
    </>
  );
}

export default App;
