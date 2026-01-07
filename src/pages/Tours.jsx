import { Link } from "react-router-dom";

function Tours() {
  return (
    <div style={{ padding: "50px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Our Tour Packages
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {/* TOUR 1 */}
        <div style={cardStyle}>
          <h2>Ooty • Coonoor • Pykara (3D / 2N)</h2>
          <p style={priceStyle}>₹12,999</p>
          <Link to="/tour/ooty-3d2n" style={buttonStyle}>
            View Itinerary
          </Link>
        </div>

        {/* TOUR 2 */}
        <div style={cardStyle}>
          <h2>
            Ooty • Coonoor • Pykara • Mudumalai • Mysore (4D / 3N)
          </h2>
          <p style={priceStyle}>₹15,999</p>
          <Link to="/tour/ooty-mudumalai-mysore" style={buttonStyle}>
            View Itinerary
          </Link>
        </div>

        {/* TOUR 3 */}
        <div style={cardStyle}>
          <h2>Ooty • Pykara • Coonoor • Isha (4D / 3N)</h2>
          <p style={priceStyle}>₹13,999</p>
          <Link to="/tour/ooty-isha" style={buttonStyle}>
            View Itinerary
          </Link>
        </div>
      </div>
    </div>
  );
}

/* 🔹 STYLES */
const cardStyle = {
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "25px",
  backgroundColor: "#ffffff",
  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
};

const priceStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  margin: "15px 0",
};

const buttonStyle = {
  display: "inline-block",
  backgroundColor: "#f59e0b",
  color: "white",
  padding: "10px 18px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

export default Tours;
