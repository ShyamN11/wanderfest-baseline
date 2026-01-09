import { Link } from "react-router-dom";
import heroImg from "../assets/hero/hero.jpg";

function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        style={{
          minHeight: "90vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {/* OVERLAY CARD */}
        <div
          style={{
            background: "rgba(0,0,0,0.65)",
            padding: "40px",
            borderRadius: "16px",
            textAlign: "center",
            maxWidth: "700px",
            width: "100%",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "36px", marginBottom: "15px" }}>
            WANDERFEST TOURLINE
          </h1>

          <p style={{ marginBottom: "30px", fontSize: "16px" }}>
            Explore Ooty, Coonoor, Mysore & more with comfort and trust
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            {/* CALL */}
            <a
              href="tel:7904579099"
              style={{
                background: "#2563eb",
                color: "white",
                padding: "12px 20px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Call Now
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/917904579099"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#22c55e",
                color: "white",
                padding: "12px 20px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              WhatsApp
            </a>

            {/* VIEW PACKAGES */}
            <Link
              to="/tours"
              style={{
                background: "#f59e0b",
                color: "white",
                padding: "12px 20px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              View Packages
            </Link>

            {/* CUSTOMIZE TRIP */}
            <Link
              to="/customize"
              style={{
                background: "white",
                color: "#111",
                padding: "12px 20px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Customize Trip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
