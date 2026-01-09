function Reviews() {
  return (
    <div style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Customer Reviews
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {reviews.map((r, i) => (
          <div key={i} style={card}>
            {r.image && (
              <img src={r.image} alt={r.name} style={img} />
            )}
            <h3>{r.name}</h3>
            <p style={{ color: "#555" }}>{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const reviews = [
  {
    name: "Arun Kumar",
    text: "Very well organized trip. Driver was friendly and places covered nicely.",
    image: "",
  },
  {
    name: "Priya S",
    text: "Affordable and comfortable journey. Highly recommended.",
    image: "",
  },
  {
    name: "Rahul & Family",
    text: "Best tour experience in Ooty. Thank you Wanderfest.",
    image: "",
  },
];

const card = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const img = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "10px",
};

export default Reviews;
