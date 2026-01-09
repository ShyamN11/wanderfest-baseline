import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#0d6efd",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white" }}>WANDERFEST TOURLINE</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tours">Tours</NavLink>
        <NavLink to="/vehicles">Vehicles</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        color: "white",
        textDecoration: "none",
        fontWeight: "500",
      }}
    >
      {children}
    </Link>
  );
}

export default Navbar;
