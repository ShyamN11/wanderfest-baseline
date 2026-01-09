import { Link } from "react-router-dom";
import tours from "../data/tours";

function Tours() {
  return (
    <div style={{ padding: "60px 20px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Our Tour Packages
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "35px",
        }}
      >
        {tours.map((tour) => (
          <div key={tour.slug} style={cardStyle}>
            <img
              src={tour.image}
              alt={tour.title}
              style={imageStyle}
            />

            <div style={{ padding: "20px" }}>
              <h2 style={{ marginBottom: "10px" }}>{tour.title}</h2>

              <p style={priceStyle}>{tour.price}</p>

              <Link to={`/tour/${tour.slug}`} style={buttonStyle}>
                View Itinerary
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const cardStyle = {
  background: "#fff",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

const priceStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const buttonStyle = {
  display: "inline-block",
  backgroundColor: "#f59e0b",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

export default Tours;
