import { Link } from "react-router-dom";
import heroImg from "../assets/hero/hero.jpg";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.7)",
            padding: "40px",
            borderRadius: "14px",
            textAlign: "center",
            maxWidth: "650px",
          }}
        >
          <h1 style={{ color: "#fff", fontSize: "36px" }}>
            WANDERFEST TOURLINE
          </h1>

          <p style={{ color: "#ddd", margin: "15px 0 30px" }}>
            Explore Ooty, Coonoor, Mysore & more with comfort and trust
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <a href="tel:8807509155" style={btnBlue}>Call Now</a>

            <a
              href="https://wa.me/7904579099"
              target="_blank"
              rel="noreferrer"
              style={btnGreen}
            >
              WhatsApp
            </a>

            <Link to="/tours" style={btnOrange}>
              View Packages
            </Link>

            <Link to="/customize" style={btnWhite}>
              Customize Trip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const btnBlue = {
  background: "#2563eb",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

const btnGreen = {
  background: "#22c55e",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

const btnOrange = {
  background: "#f59e0b",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

const btnWhite = {
  background: "#fff",
  color: "#000",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

export default Home;
