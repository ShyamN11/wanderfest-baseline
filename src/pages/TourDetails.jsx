import { useParams, Link } from "react-router-dom";
import tours from "../data/tours";

function TourDetails() {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Tour not found</h2>
        <Link to="/tours">← Back to Packages</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      {/* IMAGE */}
      <img
        src={tour.image}
        alt={tour.title}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "25px",
        }}
      />

      {/* TITLE */}
      <h1 style={{ marginBottom: "10px" }}>{tour.title}</h1>

      {/* PRICE */}
      <h2 style={{ color: "#16a34a", marginBottom: "30px" }}>
        {tour.price}
      </h2>

      {/* TIMELINE */}
      <div style={{ borderLeft: "4px solid #2563eb", paddingLeft: "25px" }}>
        {tour.itinerary.map((day, index) => (
          <div key={index} style={{ marginBottom: "25px" }}>
            <h3 style={{ color: "#2563eb" }}>
              Day {index + 1}
            </h3>
            <p style={{ marginTop: "5px" }}>{day}</p>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div style={{ marginTop: "40px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <a
          href="https://wa.me/917904579099"
          target="_blank"
          rel="noreferrer"
          style={btnGreen}
        >
          Book on WhatsApp
        </a>

        <a href="tel:7904579099" style={btnBlue}>
          Call Now
        </a>

        <Link to="/tours" style={btnGray}>
          ← Back to Packages
        </Link>
      </div>
    </div>
  );
}

/* BUTTON STYLES */
const btnGreen = {
  background: "#22c55e",
  color: "white",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

const btnBlue = {
  background: "#2563eb",
  color: "white",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

const btnGray = {
  background: "#e5e7eb",
  color: "#111827",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

export default TourDetails;
