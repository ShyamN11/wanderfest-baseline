import { useParams } from "react-router-dom";

function Itinerary() {
  const { id } = useParams();

  const itineraries = {
    ooty3d2n: {
      title: "Ooty – Coonoor – Pykara (3 Days / 2 Nights)",
      days: [
        "Day 1: Arrival at Ooty, sightseeing, hotel check-in",
        "Day 2: Coonoor, Pykara waterfalls & boating",
        "Day 3: Shopping & departure",
      ],
    },
    ooty4d3n: {
      title: "Ooty – Coonoor – Pykara – Mudumalai (4 Days / 3 Nights)",
      days: [
        "Day 1: Ooty sightseeing & stay",
        "Day 2: Coonoor & tea gardens",
        "Day 3: Pykara & Mudumalai forest safari",
        "Day 4: Return journey",
      ],
    },
    ootyisha: {
      title: "Ooty – Pykara – Coonoor – Isha",
      days: [
        "Day 1: Ooty local tour",
        "Day 2: Pykara & Coonoor",
        "Day 3: Isha Yoga Center visit & return",
      ],
    },
  };

  const data = itineraries[id];

  if (!data) {
    return <h2 style={{ textAlign: "center" }}>Itinerary not found</h2>;
  }

  return (
    <section style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px" }}>{data.title}</h1>

      <ul>
        {data.days.map((day, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {day}
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/7904579099?text=Hi, I want to book the ${data.title} package`}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          background: "#25D366",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Book via WhatsApp
      </a>
    </section>
  );
}

export default Itinerary;
