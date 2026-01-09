import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={nav}>
      {/* BRAND */}
      <div style={brand}>WANDERFEST TOURLINE</div>

      {/* MENU */}
      <div style={menu}>
        <Link to="/" style={link}>Home</Link>
        <Link to="/tours" style={link}>Tours</Link>
        <Link to="/vehicles" style={link}>Vehicles</Link>
        <Link to="/reviews" style={link}>Reviews</Link>
        <Link to="/gallery" style={link}>Gallery</Link>
        <Link to="/contact" style={link}>Contact</Link>
      </div>
    </nav>
  );
}

/* ---------- STYLES ---------- */

const nav = {
  display: "flex",
  flexDirection: "column",        // 👈 KEY for mobile
  alignItems: "center",
  gap: "12px",
  padding: "14px",
  backgroundColor: "#0f766e",     // green-blue tone
};

const brand = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#fff",
  textAlign: "center",
};

const menu = {
  display: "flex",
  flexWrap: "wrap",               // 👈 no hidden items
  justifyContent: "center",
  gap: "12px",
};

const link = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "15px",
  padding: "6px 10px",
  borderRadius: "6px",
  background: "rgba(255,255,255,0.15)",
};

export default Navbar;
