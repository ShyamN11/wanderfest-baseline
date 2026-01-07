import { useParams, Link } from "react-router-dom";

const tours = {
  ooty3d2n: {
    title: "Ooty • Coonoor • Pykara (3 Days / 2 Nights)",
    price: "₹7,999",
    days: [
      "Day 1: Arrival at Ooty, Botanical Garden, Ooty Lake",
      "Day 2: Coonoor Sightseeing, Dolphin Nose, Pykara Falls",
      "Day 3: Tea Factory visit & Departure",
    ],
  },
  ooty4d3n: {
    title: "Ooty • Coonoor • Pykara • Mudumalai • Mysore (4D / 3N)",
    price: "₹11,999",
    days: [
      "Day 1: Ooty local sightseeing",
      "Day 2: Coonoor & Pykara Falls",
      "Day 3: Mudumalai Safari & Mysore Palace",
      "Day 4: Brindavan Gardens & Departure",
    ],
  },
  ootyisha: {
    title: "Ooty • Pykara • Coonoor • Isha",
    price: "₹9,999",
    days: [
      "Day 1: Ooty sightseeing",
      "Day 2: Coonoor & Pykara",
      "Day 3: Isha Yoga Center & Departure",
    ],
  },
};

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours[id];

  if (!tour) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Tour not found</h2>
        <Link to="/tours">Go back</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>{tour.title}</h1>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{tour.price}</p>

      <h3 style={{ marginTop: "30px" }}>Day-wise Itinerary</h3>

      <ul>
        {tour.days.map((day, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {day}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "30px" }}>
        <a
          href="https://wa.me/917904579099"
          target="_blank"
          style={{
            backgroundColor: "#25D366",
            color: "white",
            padding: "12px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            marginRight: "10px",
          }}
        >
          Book via WhatsApp
        </a>

        <Link
          to="/tours"
          style={{
            padding: "12px 20px",
            border: "1px solid #000",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Back to Packages
        </Link>
      </div>
    </div>
  );
}
