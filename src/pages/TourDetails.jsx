import { useParams, Link } from "react-router-dom";

const tours = {
  ooty3d2n: {
    title: "Ooty • Coonoor • Pykara (3D / 2N)",
    price: "₹7,999",
    days: [
      "Day 1: Ooty sightseeing",
      "Day 2: Coonoor & Pykara",
      "Day 3: Departure",
    ],
  },
  ooty4d3n: {
    title: "Ooty • Coonoor • Pykara • Mudumalai • Mysore",
    price: "₹11,999",
    days: [
      "Day 1: Ooty",
      "Day 2: Coonoor",
      "Day 3: Mudumalai & Mysore",
      "Day 4: Departure",
    ],
  },
  ootyisha: {
    title: "Ooty • Pykara • Coonoor • Isha",
    price: "₹9,999",
    days: [
      "Day 1: Ooty",
      "Day 2: Pykara & Coonoor",
      "Day 3: Isha visit",
    ],
  },
};

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours[id];

  if (!tour) {
    return <h2>Tour not found</h2>;
  }

  return (
    <div className="fade-in" style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>{tour.title}</h1>
      <h3>{tour.price}</h3>

      <ul>
        {tour.days.map((day, i) => (
          <li key={i}>{day}</li>
        ))}
      </ul>

      <a
        href="https://wa.me/917904579099"
        target="_blank"
        style={{ color: "green", fontWeight: "bold" }}
      >
        Book on WhatsApp
      </a>

      <br />
      <Link to="/tours">← Back to Packages</Link>
    </div>
  );
}
