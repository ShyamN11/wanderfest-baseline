export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1604079628040-94301bb21b91",
  ];

  return (
    <div className="fade-in" style={{ padding: "40px" }}>
      <h2>Gallery</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "15px" }}>
        {images.map((img, i) => (
          <img key={i} src={img} style={{ width: "100%", borderRadius: "8px" }} />
        ))}
      </div>
    </div>
  );
}
