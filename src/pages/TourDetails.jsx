import { useParams, Link } from "react-router-dom";
import tours from "../data/tours";

function TourDetails() {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Tour not found</h2>
        <Link to="/tours">← Back to Packages</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "auto", padding: "40px" }}>
      {/* Title */}
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        {tour.title}
      </h1>

      {/* Price */}
      <p style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "30px" }}>
        {tour.price}
      </p>

      {/* Image */}
      <img
        src={tour.image}
        alt={tour.title}
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "30px",
        }}
      />

      {/* Itinerary */}
      <h2 style={{ marginBottom: "15px" }}>Day-wise Itinerary</h2>
      <ul style={{ lineHeight: "1.8", marginBottom: "30px" }}>
        {tour.itinerary.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <a
          href="tel:7904579099"
          style={callBtn}
        >
          📞 Call Now
        </a>

        <a
          href={`https://wa.me/917904579099?text=Hi, I want to book ${tour.title}`}
          target="_blank"
          rel="noreferrer"
          style={whatsBtn}
        >
          💬 WhatsApp
        </a>

        <Link to="/tours" style={backBtn}>
          ← Back to Packages
        </Link>
      </div>
    </div>
  );
}

const callBtn = {
  background: "#2563eb",
  color: "#fff",
  padding: "12px 22px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

const whatsBtn = {
  background: "#22c55e",
  color: "#fff",
  padding: "12px 22px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

const backBtn = {
  padding: "12px 22px",
  borderRadius: "8px",
  textDecoration: "none",
  border: "1px solid #ccc",
  color: "#333",
};

export default TourDetails;
