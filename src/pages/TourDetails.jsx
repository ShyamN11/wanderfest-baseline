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
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* TITLE */}
      <h1>{tour.title}</h1>

      {/* PRICE */}
      <h3>{tour.price}</h3>

      {/* ITINERARY */}
      <ul>
        {tour.itinerary.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>

      {/* ACTIONS */}
      <p>
        <a
          href="https://wa.me/917904579099"
          target="_blank"
          rel="noreferrer"
          style={{ color: "green", fontWeight: "bold" }}
        >
          Book on WhatsApp
        </a>
      </p>

      <Link to="/tours">← Back to Packages</Link>
    </div>
  );
}

export default TourDetails;
