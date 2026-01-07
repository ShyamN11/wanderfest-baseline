import { Link } from "react-router-dom";

const packages = [
  {
    id: "ooty3d2n",
    title: "Ooty • Coonoor • Pykara (3 Days / 2 Nights)",
    image: "https://images.unsplash.com/photo-1604079628040-94301bb21b91",
    price: "₹7,999",
  },
  {
    id: "ooty4d3n",
    title: "Ooty • Coonoor • Pykara • Mudumalai • Mysore (4D / 3N)",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: "₹11,999",
  },
  {
    id: "ootyisha",
    title: "Ooty • Pykara • Coonoor • Isha",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: "₹9,999",
  },
];

export default function Packages() {
  return (
    <div className="fade-in" style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Our Tour Packages
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="fade-in card-hover"
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3 style={{ marginBottom: "8px" }}>{pkg.title}</h3>
              <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                {pkg.price}
              </p>

              <Link to={`/tour/${pkg.id}`}>
                <button
                  style={{
                    padding: "10px",
                    width: "100%",
                    background: "#ff9800",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  View Itinerary
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
