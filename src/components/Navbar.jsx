import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>WANDERFEST TOURLINE</div>

      <div style={linkContainer}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/tours" style={linkStyle}>Tours</Link>
        <Link to="/vehicles" style={linkStyle}>Vehicles</Link>
        <Link to="/reviews" style={linkStyle}>Reviews</Link>
        <Link to="/gallery" style={linkStyle}>Gallery</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

/* STYLES */
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  backgroundColor: "#1673ff",
  color: "#fff",
};

const logoStyle = {
  fontSize: "22px",
  fontWeight: "bold",
};

const linkContainer = {
  display: "flex",
  gap: "20px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px",
};

export default Navbar;
