import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";

function App() {
  return (
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
            Explore Ooty, Coonoor, Pykara, Mysore & more with comfort and trust
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

            <button
              style={{
                padding: "12px 20px",
                background: "#ffc107",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              View Packages
            </button>
          </div>
        </div>
      </section>

      {/* ITINERARY PREVIEW */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "30px" }}>Popular Tour Packages</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "auto",
          }}
        >
          {[
            "Ooty – Coonoor – Pykara (3D / 2N)",
            "Ooty – Coonoor – Pykara – Mudumalai (4D / 3N)",
            "Ooty – Pykara – Coonoor – Isha",
          ].map((tour, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                borderRadius: "8px",
                background: "#f5f5f5",
              }}
            >
              <h3>{tour}</h3>
              <p>Comfortable travel · Trusted service · Best price</p>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 15px",
                  background: "#0d6efd",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                View Itinerary
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CONTACT FORM */}
      <ContactForm />
    </>
  );
}

export default App;
