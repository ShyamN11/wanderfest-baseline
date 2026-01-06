import { Routes, Route } from "react-router-dom";

import TourPackages from "./components/TourPackages";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Itinerary from "./pages/Itinerary";

function App() {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <>
            {/* HERO SECTION */}
            <section
              style={{
                minHeight: "90vh",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
                padding: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(0,0,0,0.55)",
                  padding: "40px",
                  borderRadius: "10px",
                  maxWidth: "700px",
                }}
              >
                <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
                  WANDERFEST TOURLINE
                </h1>

                <p style={{ fontSize: "18px", marginBottom: "25px" }}>
                  Explore Ooty, Coonoor, Pykara, Mysore & more with comfort and
                  trust
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href="tel:7904579099"
                    style={{
                      padding: "12px 20px",
                      background: "#0d6efd",
                      color: "white",
                      borderRadius: "6px",
                      textDecoration: "none",
                    }}
                  >
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/7904579099"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: "12px 20px",
                      background: "#25D366",
                      color: "white",
                      borderRadius: "6px",
                      textDecoration: "none",
                    }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </section>

            {/* TOUR PACKAGES */}
            <TourPackages />

            {/* TESTIMONIALS */}
            <Testimonials />

            {/* CONTACT FORM */}
            <ContactForm />
          </>
        }
      />

      {/* ITINERARY PAGE */}
      <Route path="/itinerary/:id" element={<Itinerary />} />
    </Routes>
  );
}

export default App;
