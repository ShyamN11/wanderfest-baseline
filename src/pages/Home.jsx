import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="fade-in"
      style={{
        minHeight: "90vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
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
          backgroundColor: "rgba(0,0,0,0.55)",
          padding: "40px",
          borderRadius: "10px",
          maxWidth: "700px",
        }}
      >
        <h1>WANDERFEST TOURLINE</h1>
        <p>Explore Ooty, Coonoor, Mysore & more</p>

        <div style={{ marginTop: "20px" }}>
          <a href="tel:7904579099" style={btn("#0d6efd")}>Call Now</a>{" "}
          <a
            href="https://wa.me/917904579099"
            target="_blank"
            style={btn("#25D366")}
          >
            WhatsApp
          </a>{" "}
          <Link to="/tours" style={btn("#ff9800")}>
            View Packages
          </Link>
        </div>
      </div>
    </div>
  );
}

function btn(color) {
  return {
    backgroundColor: color,
    color: "white",
    padding: "12px 20px",
    borderRadius: "6px",
    textDecoration: "none",
    margin: "5px",
    display: "inline-block",
  };
}
