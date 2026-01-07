import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
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
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          WANDERFEST TOURLINE
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Explore Ooty, Coonoor, Mysore & more with comfort and trust
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:7904579099"
            style={btnStyle("#0d6efd")}
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917904579099"
            target="_blank"
            style={btnStyle("#25D366")}
          >
            WhatsApp
          </a>

          <Link to="/tours" style={btnStyle("#ff9800")}>
            View Packages
          </Link>
        </div>
      </div>
    </div>
  );
}

function btnStyle(bg) {
  return {
    backgroundColor: bg,
    color: "white",
    padding: "12px 22px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
  };
}
