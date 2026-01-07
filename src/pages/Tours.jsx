import { Link } from "react-router-dom";
import tours from "../data/tours";

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
        {tours.map((tour) => (
          <div key={tour.slug} style={cardStyle}>
            <img
              src={tour.image}
              alt={tour.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />

            <h2>{tour.title}</h2>
            <p style={priceStyle}>{tour.price}</p>

            <Link to={`/tour/${tour.slug}`} style={buttonStyle}>
              View Itinerary
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  borderRadius: "12px",
  padding: "20px",
  background: "#fff",
  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
};

const priceStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "10px 0",
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
