import { Link } from "react-router-dom";
import heroImg from "../assets/hero/hero.jpg";


function Home() {
  return (
    <div
      style={{
        minHeight: "90vh",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.65)",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          color: "#fff",
          maxWidth: "700px",
          width: "90%",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
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
          <a
            href="tel:8807509155"
            style={btnBlue}
          >
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

          <Link to="/contact" style={btnWhite}>
            Customize Trip
          </Link>
        </div>
      </div>
    </div>
  );
}

const btnBase = {
  padding: "12px 22px",
  borderRadius: "10px",
  fontWeight: "600",
  textDecoration: "none",
  fontSize: "16px",
};

const btnBlue = {
  ...btnBase,
  background: "#2563eb",
  color: "#fff",
};

const btnGreen = {
  ...btnBase,
  background: "#22c55e",
  color: "#fff",
};

const btnOrange = {
  ...btnBase,
  background: "#f59e0b",
  color: "#fff",
};

const btnWhite = {
  ...btnBase,
  background: "#fff",
  color: "#000",
};

export default Home;
