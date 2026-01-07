const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1604079628040-94301bb21b91",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
];

export default function Gallery() {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Travel Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Travel"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
