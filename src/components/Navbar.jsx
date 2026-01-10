import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section style={hero}>
        <img
          src="/hero.jpg"
          alt="Wanderfest Tourline"
          style={heroImage}
        />

        <div style={heroContent}>
          <h1 style={title}>Explore Ooty with Wanderfest</h1>
          <p style={subtitle}>
            Trusted Tour Packages • Comfortable Vehicles • Happy Customers
          </p>

          <div style={buttonGroup}>
            <Link to="/tours" style={primaryBtn}>
              View Tour Packages
            </Link>

            <Link to="/customize" style={secondaryBtn}>
              Customize Trip
            </Link>
          </div>

          {/* CALL & WHATSAPP */}
          <div style={contactRow}>
            <a href="tel:8807509155" style={callBtn}>
              📞 Call
            </a>
            <a
              href="https://wa.me/917904579099"
              target="_blank"
              rel="noreferrer"
              style={whatsappBtn}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- STYLES ---------- */

const hero = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const heroImage = {
  width: "100%",
  maxHeight: "55vh",
  objectFit: "cover",
};

const heroContent = {
  padding: "20px",
};

const title = {
  fontSize: "26px",
  marginBottom: "10px",
};

const subtitle = {
  fontSize: "15px",
  color: "#555",
  marginBottom: "20px",
};

const buttonGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginBottom: "18px",
};

const primaryBtn = {
  background: "#0f766e",
  color: "#fff",
  padding: "14px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};

const secondaryBtn = {
  background: "#f59e0b",
  color: "#fff",
  padding: "14px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};

const contactRow = {
  display: "flex",
  gap: "14px",
  justifyContent: "center",
};

const callBtn = {
  background: "#2563eb",
  color: "#fff",
  padding: "12px 18px",
  borderRadius: "30px",
  textDecoration: "none",
  fontWeight: "bold",
};

const whatsappBtn = {
  background: "#16a34a",
  color: "#fff",
  padding: "12px 18px",
  borderRadius: "30px",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Home;
