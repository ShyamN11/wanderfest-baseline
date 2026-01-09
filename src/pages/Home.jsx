import { Link } from "react-router-dom";
import heroImg from "../assets/hero/hero.jpg";

function Home() {
  return (
    <div
      style={{
        minHeight: "90vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
          url(${heroImg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: "40px",
          borderRadius: "14px",
          maxWidth: "700px",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          WANDERFEST TOURLINE
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
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
          <a href="tel:7904579099" style={btnBlue}>
            Call Now
          </a>

          <a
            href="https://wa.me/917904579099"
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
  );
}

/* BUTTON STYLES */
const btnBlue = {
  background: "#2563eb",
  padding: "12px 22px",
  borderRadius: "10px",
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
};

const btnGreen = {
  background: "#22c55e",
  padding: "12px 22px",
  borderRadius: "10px",
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
};

const btnOrange = {
  background: "#f59e0b",
  padding: "12px 22px",
  borderRadius: "10px",
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
};

const btnWhite = {
  background: "white",
  padding: "12px 22px",
  borderRadius: "10px",
  color: "#111",
  textDecoration: "none",
  fontWeight: "700",
};

export default Home;
