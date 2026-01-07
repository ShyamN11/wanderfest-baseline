import { useParams, Link } from "react-router-dom";
import tours from "../data/tours";

function TourDetails() {
  const { slug } = useParams();

  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return <h2 style={{ padding: "40px" }}>Tour not found</h2>;
  }

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        {tour.title}
      </h1>

      <h2 style={{ color: "#0f172a", marginBottom: "20px" }}>
        {tour.price}
      </h2>

      <ul style={{ marginBottom: "30px" }}>
        {tour.days.map((day, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {day}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <a
          href="https://wa.me/917904579099"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#22c55e",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Book on WhatsApp
        </a>

        <a
          href="tel:8807509155"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Call Now
        </a>

        <Link
          to="/tours"
          style={{
            backgroundColor: "#e5e7eb",
            color: "#111827",
            padding: "12px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          ← Back to Packages
        </Link>
      </div>
    </div>
  );
}

export default TourDetails;
