import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import CustomizeTrip from "./pages/CustomizeTrip";
import Vehicles from "./pages/Vehicles";
import Reviews from "./pages/Reviews";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:slug" element={<TourDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customize" element={<CustomizeTrip />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />


      </Routes>
    </>
  );
}

export default App;
